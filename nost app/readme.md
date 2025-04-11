https://github.com/user-attachments/assets/0535b564-4364-42b6-be02-8cfd4db58c0d


📝 Simple Notes App - Description
This is a basic note-taking web application built using HTML, CSS, and JavaScript. It allows users to:

✅ Create new text-based notes

✏️ Edit existing notes

❌ Delete notes

🔍 Search through notes in real-time

📁 Structure Breakdown
🔹 HTML
Provides the structure for the app, including:

A header with a title and search bar

A note input area (textarea + Add/Cancel buttons)

A list section to display all notes in card format

🔹 CSS (style.css)
Adds styling and layout to make the app visually appealing.

Example features: card styles, button colors, spacing, background gradients.

🔹 JavaScript
Handles all the logic:

notes[] – stores all the notes in an array

renderNotes() – updates the UI with filtered or full notes list

addBtn.onclick – adds a new note or updates an existing one

cancelBtn.onclick – resets the input field

searchInput.oninput – filters notes based on search text

Inline event listeners to handle edit and delete actions per note

⚙️ Possible Enhancements
💾 Save notes in localStorage (to persist across page reloads)

🎨 Add color tagging or note categories

📅 Add timestamps to notes

📲 Make it mobile-responsive

