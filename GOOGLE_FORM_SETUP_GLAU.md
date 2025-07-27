# Google Form Setup for Glancio Demo Requests

## 🎯 Quick Setup for glancioau@gmail.com

### Step 1: Create Google Form

1. **Go to Google Forms**: [forms.google.com](https://forms.google.com)
2. **Create new form**: Click the "+" button
3. **Name it**: "Glancio Demo Request"

### Step 2: Add Form Fields

**Copy these exact fields:**

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

### Step 3: Configure Email Notifications

1. **Click "Responses" tab**
2. **Click the three dots menu** (⋮)
3. **Select "Get email notifications for new responses"**
4. **Add email**: `glancioau@gmail.com`
5. **Save settings**

### Step 4: Get Embed Code

1. **Click "Send"** (top right)
2. **Click embed tab** (</> icon)
3. **Copy the embed URL** - it looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXX/viewform?embedded=true
   ```

### Step 5: Update Demo Page

1. **Open** `public/demo.html`
2. **Find this line** (around line 120):
   ```html
   src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   ```
3. **Replace** `YOUR_FORM_ID` with your actual form ID
4. **Save the file**

### Step 6: Test the Form

1. **Start server**: `npm start`
2. **Visit**: `http://localhost:3000`
3. **Click "Get a demo"** button
4. **Fill out the form**
5. **Check** glancioau@gmail.com for the response

## 🔧 Advanced Configuration

### Email Template Setup

**In Google Forms Responses tab:**
1. **Click "Responses"**
2. **Click "More" (⋮)**
3. **Select "Download responses (CSV)"**
4. **Set up automatic CSV export**

### Form Validation

**Make these fields required:**
- Company Name
- Contact Name  
- Email Address
- Current Challenges

### Response Collection

**In Google Forms:**
1. **Responses tab** → **Individual** (to see each response)
2. **Responses tab** → **Summary** (to see analytics)
3. **Responses tab** → **Question** (to see specific answers)

## 📧 Email Notification Setup

### Automatic Email Notifications

1. **In Google Forms**: Responses → ⋮ → "Get email notifications"
2. **Add**: glancioau@gmail.com
3. **Test**: Submit a test form to verify

### Email Format

Each response will include:
- **Timestamp**
- **All form fields**
- **Direct link to response**

## 🚀 Testing Checklist

- [ ] Form loads on demo page
- [ ] All fields are visible
- [ ] Required fields work
- [ ] Form submits successfully
- [ ] Email received at glancioau@gmail.com
- [ ] Mobile responsive
- [ ] Back button works

## 🆘 Troubleshooting

### Form Not Loading
- Check form ID is correct
- Verify form is published
- Test embed URL directly

### No Email Notifications
- Check spam folder
- Verify email address
- Test with different email

### Mobile Issues
- Test on different devices
- Check responsive design
- Verify touch interactions

## 📱 Mobile Optimization

The form is already mobile-optimized:
- **Responsive design**
- **Touch-friendly**
- **Fast loading**
- **Accessible**

## 🔒 Security & Privacy

- **HTTPS**: Google Forms are secure
- **GDPR compliant**: Google handles privacy
- **No data storage**: Form data stays with Google
- **Secure**: All responses encrypted

## 📊 Analytics Setup

### Google Analytics Integration
1. **Add Google Analytics** to your website
2. **Track form submissions** as goals
3. **Monitor conversion rates**

### Form Analytics
- **View response rates** in Google Forms
- **Export data** to Google Sheets
- **Set up automated reports**

## 🎯 Next Steps

1. **Create the Google Form** using the steps above
2. **Update the demo page** with your form ID
3. **Test the integration** thoroughly
4. **Set up email notifications** for glancioau@gmail.com
5. **Monitor responses** and follow up quickly

---

**Your form will now send all demo requests directly to glancioau@gmail.com! 🎉** 