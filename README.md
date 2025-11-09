🔍 Overview

Food Explorer is a responsive web app that lets users explore meal categories, discover random dishes, and view detailed recipes — including ingredients, measurements, and cooking instructions — all fetched dynamically from an API.

Built with HTML, CSS, JS, and Bootstrap for layout and responsiveness.

🚀 Features

Explore More Section: Displays multiple food categories dynamically.

Random Recipes Section: Loads 12 random dishes into a favorites section.

Cravings Section: Displays additional meals dynamically in a visually appealing layout.

Recipe Modal: Shows full details of selected dishes, including ingredients, measures, and cooking steps.

Interactive UI: Clickable titles open detailed modals with smooth toggling.

🧠 Tech Stack

Frontend: HTML, CSS, Bootstrap 5, JavaScript (Fetch API)

API Used: Custom recipe API (no branding used in project)

Author: Jenish

⚙️ How It Works

Fetches data from an open meal API using fetch().

Dynamically renders meal categories and random dishes.

Click events open a model (popup) with complete recipe info.

Uses event delegation to handle user interactions efficiently.

🧩 Key JS Functions
Function	Description
getExploreItems()	Loads meal categories into the "Explore More" section.
getRandom()	Fetches and displays random meals.
renderModel(mealName)	Opens modal with full recipe details.
getInfo(name)	Fetches recipe data for a specific meal.
📸 UI Sections

Explore More Row: Rounded category images

Favorites Recipes Row: Grid of random meals

Craving Row: Large display with overlay titles

Modal Section: Ingredient and measure breakdown
