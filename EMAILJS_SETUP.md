# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (100 emails/month free)

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys

## Step 6: Restart Your Dev Server

After adding the environment variables, restart your Next.js dev server:

```bash
npm run dev
```

## Alternative: Using Mailto (No Setup Required)

If you don't want to set up EmailJS, the form will automatically fall back to opening your default email client with a pre-filled message. This works without any configuration but requires the user to have an email client configured.

## Testing

1. Fill out the contact form
2. Submit it
3. Check your email inbox for the message

## Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **Email not received**: Check your spam folder and verify your EmailJS service is configured correctly
- **Error messages**: Check the browser console for detailed error information

