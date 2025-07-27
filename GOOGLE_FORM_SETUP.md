# Google Form Setup Guide for Glancio Demo

## 🎯 Overview
This guide will help you set up a Google Form for demo requests and integrate it with your Glancio website.

## 📋 Step-by-Step Setup

### 1. Create a Google Form

1. **Go to Google Forms**: Visit [forms.google.com](https://forms.google.com)
2. **Create a new form**: Click the "+" button to create a new form
3. **Name your form**: "Glancio Demo Request" or similar

### 2. Add Form Fields

**Recommended fields for your demo form:**

#### Basic Information
- **Company Name** (Short answer, required)
- **Contact Name** (Short answer, required)
- **Email Address** (Short answer, required)
- **Phone Number** (Short answer, optional)

#### Business Information
- **Company Size** (Multiple choice)
  - 1-10 employees
  - 11-50 employees
  - 51-200 employees
  - 201-1000 employees
  - 1000+ employees

- **Industry** (Multiple choice)
  - Retail
  - E-commerce
  - Grocery
  - Fashion
  - Electronics
  - Other

#### Demo Preferences
- **Current Challenges** (Paragraph, required)
  - What are your main retail analytics challenges?
  - What are you hoping to achieve with Glancio?

- **Preferred Demo Date** (Date picker)
- **Preferred Demo Time** (Multiple choice)
  - Morning (9 AM - 12 PM)
  - Afternoon (1 PM - 4 PM)
  - Evening (5 PM - 7 PM)

- **Number of Locations** (Multiple choice)
  - 1-5 locations
  - 6-20 locations
  - 21-50 locations
  - 50+ locations

### 3. Configure Form Settings

1. **Settings tab**:
   - ✅ Collect email addresses
   - ✅ Limit to 1 response per person
   - ✅ Show link to submit another response

2. **Responses tab**:
   - ✅ Get email notifications for new responses
   - ✅ Add your email address for notifications

### 4. Get the Embed Code

1. **Click "Send"** in the top right
2. **Click the embed tab** (</> icon)
3. **Copy the embed URL** - it will look like:
   ```
   https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
   ```

### 5. Update the Demo Page

1. **Open** `public/demo.html`
2. **Find this line**:
   ```html
   src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   ```
3. **Replace** `YOUR_FORM_ID` with your actual form ID
4. **Save the file**

### 6. Test the Integration

1. **Start your server**: `npm start`
2. **Visit**: `http://localhost:3000`
3. **Click any "Get a demo" button**
4. **Verify** it redirects to `/demo` with your form

## 🔧 Customization Options

### Form Styling
The form is styled to match your website's design. You can customize:

- **Form height**: Change `height: 600px` in the CSS
- **Form width**: The form is responsive by default
- **Background**: The form container has a subtle glass effect

### Additional Features

#### Email Notifications
- Set up email notifications in Google Forms
- Responses will be sent to your email
- You can also export responses to Google Sheets

#### Response Tracking
- View responses in Google Forms dashboard
- Export to Google Sheets for CRM integration
- Set up automated follow-up emails

#### Form Validation
- Make required fields mandatory
- Add email format validation
- Set up custom validation rules

## 📱 Mobile Optimization

The form is already mobile-optimized:
- Responsive design
- Touch-friendly interface
- Fast loading on mobile devices

## 🔒 Security & Privacy

- **HTTPS**: Google Forms are served over HTTPS
- **No data storage**: Form data is stored securely by Google
- **GDPR compliant**: Google Forms comply with privacy regulations

## 🚀 Advanced Integration

### CRM Integration
You can connect Google Forms to:
- **Zapier**: Automate follow-ups
- **Mailchimp**: Add to email lists
- **Salesforce**: Create leads automatically
- **HubSpot**: Sync contact information

### Analytics
Track form performance with:
- **Google Analytics**: Add tracking codes
- **Form completion rates**: Monitor in Google Forms
- **Conversion tracking**: Set up goals in Google Analytics

## 🆘 Troubleshooting

### Form Not Loading
- Check the form ID is correct
- Verify the form is published
- Test the embed URL directly

### Styling Issues
- Clear browser cache
- Check CSS conflicts
- Verify responsive design

### Button Not Working
- Check JavaScript console for errors
- Verify button selectors
- Test on different browsers

## 📞 Support

If you need help:
1. Check Google Forms documentation
2. Test the form in incognito mode
3. Contact support with specific error messages

---

**Your form is now ready to collect demo requests! 🎉** 