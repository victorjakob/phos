import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Validate required fields
    if (!formData.name || !formData.email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Email templates for different form types
    const emailTemplates = {
      "tune-in": {
        subject: "New PHOS Tune-In Registration",
        html: `
          <h2>New PHOS Tune-In Registration</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        `,
      },
      collaborate: {
        subject: "New PHOS Collaboration Request",
        html: `
          <h2>New PHOS Collaboration Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Country:</strong> ${formData.country || "Not provided"}</p>
          <p><strong>Role:</strong> ${formData.role || "Not provided"}</p>
          <p><strong>Collaboration Type:</strong> ${
            formData.collaborationType || "Not provided"
          }</p>
          <p><strong>Vision:</strong> ${formData.vision || "Not provided"}</p>
          <p><strong>Portfolio:</strong> ${
            formData.portfolio || "Not provided"
          }</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        `,
      },
      support: {
        subject: "New PHOS Support Request",
        html: `
          <h2>New PHOS Support Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Country:</strong> ${formData.country || "Not provided"}</p>
          <p><strong>Support Type:</strong> ${
            formData.supportType || "Not provided"
          }</p>
          <p><strong>Amount:</strong> ${formData.amount || "Not provided"}</p>
          <p><strong>Custom Amount:</strong> ${
            formData.customAmount || "Not provided"
          }</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        `,
      },
      join: {
        subject: "New PHOS Join Request",
        html: `
          <h2>New PHOS Join Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Country:</strong> ${formData.country || "Not provided"}</p>
          <p><strong>Role:</strong> ${formData.role || "Not provided"}</p>
          <p><strong>Interests:</strong> ${
            formData.interests?.join(", ") || "Not provided"
          }</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        `,
      },
    };

    const template = emailTemplates[formType];
    if (!template) {
      return Response.json({ error: "Invalid form type" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "PHOS Website <phos@phos.is>",
      to: ["viggijakob@gmail.com"],
      subject: template.subject,
      html: template.html,
      replyTo: formData.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
