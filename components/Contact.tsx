import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section";

interface FormData {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters long";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// EmailJS configuration - these should be set in your .env.local file
			const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
			const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error(
					"EmailJS configuration is missing. Please check your environment variables."
				);
			}

			// Template parameters that will be used in your EmailJS template
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				to_email: formData.email, // This sends to the user's email
				message: formData.message,
				reply_to: formData.email,
			};

			await emailjs.send(
				serviceId,
				templateId,
				templateParams,
				publicKey
			);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Section id="contact" title="Get In Touch">
			<div className="max-w-2xl mx-auto text-center">
				<p className="mb-8 text-lg text-text-secondary">
					I'm currently open to new opportunities and collaborations.
					Feel free to send me a message about anything you want to
					discuss.
				</p>

				{submitStatus === "success" && (
					<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
						Thank you for your message! I'll get back to you soon.
					</div>
				)}

				{submitStatus === "error" && (
					<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
						Sorry, there was an error sending your message. Please
						try again or contact me directly.
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								placeholder="Your Name"
								className={`w-full bg-secondary text-text-primary px-4 py-3 rounded-md border ${
									errors.name
										? "border-red-500"
										: "border-primary"
								} focus:outline-none focus:ring-2 focus:ring-accent`}
							/>
							{errors.name && (
								<p className="mt-1 text-sm text-red-500 text-left">
									{errors.name}
								</p>
							)}
						</div>

						<div>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								placeholder="Your Email"
								className={`w-full bg-secondary text-text-primary px-4 py-3 rounded-md border ${
									errors.email
										? "border-red-500"
										: "border-primary"
								} focus:outline-none focus:ring-2 focus:ring-accent`}
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-500 text-left">
									{errors.email}
								</p>
							)}
						</div>
					</div>

					<div>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							placeholder="Your Message"
							rows={5}
							className={`w-full bg-secondary text-text-primary px-4 py-3 rounded-md border ${
								errors.message
									? "border-red-500"
									: "border-primary"
							} focus:outline-none focus:ring-2 focus:ring-accent`}
						/>
						{errors.message && (
							<p className="mt-1 text-sm text-red-500 text-left">
								{errors.message}
							</p>
						)}
					</div>

					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							className={`w-full font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform ${
								isSubmitting
									? "bg-gray-400 cursor-not-allowed"
									: "bg-accent text-primary hover:bg-white hover:scale-105"
							}`}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</Section>
	);
};

export default Contact;
