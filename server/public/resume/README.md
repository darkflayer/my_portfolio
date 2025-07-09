# Resume File Setup

## How to Add Your Resume

1. **Place your resume PDF file** in this directory (`server/public/resume/`)
2. **Name it exactly**: `Hemant_Singh_Resume.pdf`
3. **Restart the server** after adding the file

## File Requirements

- **Format**: PDF only
- **Filename**: Must be exactly `Hemant_Singh_Resume.pdf`
- **Location**: This directory (`server/public/resume/`)

## What Happens

- If your resume file exists: Users will download your actual resume
- If your resume file doesn't exist: Users will get a generated PDF as fallback

## Example

```
server/public/resume/
├── Hemant_Singh_Resume.pdf  ← Your actual resume goes here
└── README.md                ← This file
```

## Benefits

✅ **Full control** over resume formatting and content  
✅ **No generation issues** - serves your exact file  
✅ **Faster downloads** - no PDF generation time  
✅ **Fallback system** - still works if file is missing  
✅ **Easy updates** - just replace the file and restart server 