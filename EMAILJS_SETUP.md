# EmailJS Setup Guide

Your contact form is now functional and ready to send emails! Follow these steps to complete the setup:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save the Service ID** - you'll need this

## 3. Create Email Template

1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. **Save the Template ID** - you'll need this

## 4. Get Your Public Key

1. Go to **"Account"** → **"General"** in your dashboard
2. Find your **Public Key** - you'll need this

## 5. Update Environment Variables

Update your `.env.local` file with the actual values:

```env
GEMINI_API_KEY=PLACEHOLDER_API_KEY

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## 6. Deploy

After updating your environment variables:

```bash
npm run deploy
```

## Features Added

✅ **Form Validation** - Validates name, email format, and message length
✅ **Email Sending** - Sends emails using EmailJS
✅ **User Feedback** - Shows success/error messages
✅ **Loading States** - Shows "Sending..." while processing
✅ **Error Handling** - Graceful error handling with user-friendly messages

## Testing

1. Fill out the form on your website
2. Submit it
3. Check your email for the message
4. The email will be sent to the address the user provided in the form

## Free Tier Limits

EmailJS free tier includes:
- 200 emails/month
- 2 email services
- 1 email template
- EmailJS branding in emails

This should be sufficient for a portfolio website!

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure your email service is properly configured in EmailJS
4. Check EmailJS dashboard for any error logs