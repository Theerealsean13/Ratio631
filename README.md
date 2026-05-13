# Ratio631 Color Tool

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)

A dynamic React application built to visualize and generate UI color palettes based on the standard 60:30:10 design rule. This tool helps developers and designers instantly preview how dominant, secondary, and accent colors interact within a modern interface.

## Visual Preview
Defult Hex Colours when on the front page of the Ratio631 color tool
<img width="1919" height="963" alt="Screenshot 2026-05-13 143238" src="https://github.com/user-attachments/assets/7df6fcfb-3a25-4430-b904-c630b7285fbc" />
Random hex colour suggestions when pressing the Astonish Me Button
<img width="1919" height="963" alt="Screenshot 2026-05-13 143309" src="https://github.com/user-attachments/assets/af2840a6-982c-40ee-998d-b58102f8fa59" />
<img width="1919" height="967" alt="Screenshot 2026-05-13 143423" src="https://github.com/user-attachments/assets/91ef67b9-3dda-43a5-85a7-0e3e181efea3" />
<img width="1919" height="965" alt="Screenshot 2026-05-13 143351" src="https://github.com/user-attachments/assets/4c1fe23a-50f8-4ea1-a080-85c788c1b25d" />



## Key Features
* **Dynamic Palette Generation:** Includes an "Astonish Me" feature that intelligently selects and shuffles popular UI hex codes to create cohesive, randomized color schemes.
* **Smart Contrast Algorithm:** Integrates a custom RGB brightness calculation to dynamically flip the text color (black or white) based on the background color's luminosity, ensuring perfect readability at all times.
* **Native Color Picker Integration:** Allows users to manually fine-tune individual colors within the 60%, 30%, and 10% blocks, updating the entire application state in real-time.
* **Responsive Architecture:** Built using modern CSS Grid and Flexbox for a fluid, scalable layout that adapts beautifully to different screen sizes.

## Technical Walkthrough: State & Styling Logic
This application relies heavily on React's `useState` to bind the UI directly to the underlying data. 
* The `dominant`, `secondary`, and `accent` states control not just the specific color blocks, but also the global application background and typography.
* A helper function `getContrastColor(hex)` mathematically evaluates the brightness of any selected color, providing an automated, accessible user experience without manual intervention.

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Theerealsean13/Ratio631.git](https://github.com/Theerealsean13/Ratio631.git)
