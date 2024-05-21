# Gutenberg Block Recipe 3 - QR Code Edition 📲

Welcome to the QR Code block recipe, where we blend the magic of technology with the simplicity of QR codes to take your WordPress site to the next level!

📲 Want to make your content scannable and instantly accessible? You’ve come to the right place!

With this repository, we will create a Gutenberg block that seamlessly integrates QR code functionality into your WordPress content.

This README will guide you through the setup and usage of the QR Code block.

## 🧾 Ingredients

To whip up the QR Code block, you'll need the following ingredients:

- **block**: The backbone of our QR Code block, enabling smooth integration into the Gutenberg editor.
- **editor.scss**: Style rules crafted for the editor interface, ensuring an intuitive user experience.
- **useBlockProps**: A React hook providing essential props for the block wrapper element.
- **TextControl**: A component from `@wordpress/components` used for handling text input within the block.
- **i18n**: Internationalization utilities from `@wordpress/i18n` for translating text strings.

### 👨‍🍳 Cooking Instructions

Eager to make your content scannable with the QR Code block? Follow these step-by-step instructions:

1. **Installation**:
	- Start by cloning this repository to your local machine using the `git clone` command followed by the repository URL.
	- Once cloned, navigate to the repository directory using your preferred command line interface.
	- Upload the `qrcode` folder to the `wp-content/plugins/` directory of your WordPress installation. This can be done via FTP or by directly copying the folder into the directory.
	- Head to your WordPress admin dashboard and go to the "Plugins" section. You should see the QR Code plugin listed there. Click on "Activate" to add QR code functionality to your site!

2. **Block Registration**:
	- Open the `index.php` file in your code editor. This is where the magic happens! Use the necessary functions to register the QR Code block type, ensuring its availability within the Gutenberg editor.

3. **Block Functionality**:
	- Dive into the `index.js` file where the core functionality of our QR Code block is defined. This file outlines how the block behaves within the editor interface. We’ve implemented a `TextControl` component to handle QR code input efficiently, providing a seamless user experience.

4. **Data Management**:
	- Utilize the `useEntityProp` hook within the `Edit` component to manage QR code information associated with your content. This allows for dynamic updating and retrieval of QR code data, enhancing data management capabilities on your WordPress site.

5. **Customization and Exploration**:
	- Now that you’ve grasped the basics, feel free to explore and customize the QR Code block to fit your specific needs. Whether it’s fine-tuning styling or expanding functionality, the possibilities are endless!

## Usage

With the QR Code block, managing and displaying QR code information on your WordPress site has never been easier!

Effortlessly enhance your content’s accessibility and provide users with quick, scannable links directly within your content.

Happy coding, and may your WordPress adventures be filled with seamless scans and instant access! 📲

---

Enjoy creating QR code-enabled content and making your WordPress site more interactive! 🎉
