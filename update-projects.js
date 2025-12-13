const fs = require('fs');
const path = require('path');

// Directory containing project files
const projectsDir = path.join(__dirname, 'projects');

// Function to update a project file
function updateProjectFile(filePath) {
    try {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Add projects-common.css after project.css
        if (!content.includes('projects-common.css')) {
            content = content.replace(
                '<link rel="stylesheet" href="../css/project.css">',
                '<link rel="stylesheet" href="../css/project.css">\n    <link rel="stylesheet" href="../css/projects-common.css">'
            );
        }
        
        // 2. Add project-animations.js before the closing body tag
        if (!content.includes('project-animations.js')) {
            content = content.replace(
                '    <script>',
                '    <script src="../js/project-animations.js"></script>\n    <script>'
            );
        }
        
        // 3. Update project-meta to use project-subtitle class
        content = content.replace(
            /<p class="project-meta">(.*?)<\/p>/g,
            '<p class="project-subtitle">$1</p>'
        );
        
        // 4. Add reveal class to project sections
        content = content.replace(
            /<section class="project-section"/g,
            '<section class="project-section reveal"'
        );
        
        // 5. Add reveal class to feature cards
        content = content.replace(
            /<div class="feature-card"/g,
            '<div class="feature-card reveal"'
        );
        
        // 6. Add reveal class to tech grid items
        content = content.replace(
            /<div class="tech-grid"/g,
            '<div class="tech-grid reveal"'
        );
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`Error updating ${filePath}:`, error);
        return false;
    }
}

// Process all HTML files in the projects directory
fs.readdir(projectsDir, (err, files) => {
    if (err) {
        console.error('Error reading projects directory:', err);
        return;
    }
    
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    console.log(`Found ${htmlFiles.length} project files to update.`);
    
    let updatedCount = 0;
    htmlFiles.forEach(file => {
        const filePath = path.join(projectsDir, file);
        if (updateProjectFile(filePath)) {
            updatedCount++;
        }
    });
    
    console.log(`\nUpdate complete! Successfully updated ${updatedCount} of ${htmlFiles.length} project files.`);
});
