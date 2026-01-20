/**
 * TableLink Application Form - Google Apps Script
 * 
 * This script receives form submissions and appends them to a Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add these column headers in row 1:
 *    Timestamp | Full Name | Age | WhatsApp | Neighborhood | Max Travel | Work Type | Hopes | Social URL | New to Bangalore | How Long | Submitted At
 * 3. Go to Extensions > Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Update SHEET_ID below with your Google Sheet ID (from the URL)
 * 6. Update SHEET_TAB_NAME if your tab is not named "Applications"
 * 7. Click Deploy > New deployment
 * 8. Select "Web app" as the type
 * 9. Set "Execute as" to "Me"
 * 10. Set "Who has access" to "Anyone"
 * 11. Click Deploy and authorize the app
 * 12. Copy the Web app URL and set it as NEXT_PUBLIC_SHEETS_ENDPOINT in your .env.local
 */

// ============ CONFIGURATION ============
// Replace with your Google Sheet ID (the long string in the sheet URL)
const SHEET_ID = "12hbIBA99thSQrX5sarYTUzWM1no0EexfHCjiuDCtbMs";

// Replace with your sheet tab name (default is "Applications")
const SHEET_TAB_NAME = "Applications";
// ========================================

/**
 * Handles POST requests from the form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet and get the sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_TAB_NAME);
    
    if (!sheet) {
      throw new Error(`Sheet "${SHEET_TAB_NAME}" not found`);
    }
    
    // Prepare the row data
    const row = [
      new Date().toISOString(),           // Timestamp
      data.fullName || "",                 // Full Name
      data.age || "",                      // Age
      data.whatsappNumber || "",           // WhatsApp
      data.neighborhood || "",             // Neighborhood
      data.maxTravelTime || "",            // Max Travel Time
      data.workType || "",                 // Work Type
      data.hopes || "",                    // Hopes
      data.socialUrl || "",                // Social URL
      data.newToBangalore || "",           // New to Bangalore
      data.howLong || "",                  // How Long
      data.submittedAt || ""               // Original submit timestamp
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error("Error processing form submission:", error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "TableLink form endpoint is running",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - run this manually to verify sheet access
 */
function testSheetAccess() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_TAB_NAME);
    
    if (sheet) {
      Logger.log("✅ Successfully connected to sheet: " + sheet.getName());
      Logger.log("✅ Sheet has " + sheet.getLastRow() + " rows");
    } else {
      Logger.log("❌ Sheet tab not found: " + SHEET_TAB_NAME);
    }
  } catch (error) {
    Logger.log("❌ Error: " + error.message);
  }
}
