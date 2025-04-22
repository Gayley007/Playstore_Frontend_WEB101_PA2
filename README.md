# Playstore_Frontend_WEB101_PA2

## Project Overview
This project is a frontend implementation of a Google Play Store web application. It was a group assignment where our team members collaborated and each member worked on different pages in separate branches and merged our work into the `development` branch. It provides users with categorized sections for games, apps, and kids' content, along with features like top charts, recommendations.
---

## Development Environment Setup

### Prerequisites
- Vite (bundler for modern web applications)
- React.js (v19 or higher)
- npm or yarn package manager
- A modern web browser

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Playstore_Frontend_WEB101_PA2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

---

### Folder Structure
```
Playstore_Frontend_WEB101_PA2/
├── google-play-store/
│   ├── src/
│   │   ├── components/       # Reusable components like Footer, Data, etc.
│   │   ├── apps_page/        # Apps section
│   │   ├── kids_page/        # Kids section
│   │   ├── main.jsx          
│   │   ├── App.jsx           # Main 
│   │   ├── game.jsx          # Game section 
│   │   ├── index.css         # Global styles
│   ├── vite.config.js        
│   ├── package.json          
│   ├── index.html            
```
---

## Component Documentation

### 1. `App.jsx`
- **Purpose**: Defines the main routing logic for the application.
- **Props/Inputs**: None.
- **Usage Example**:
  ```jsx
  <Routes>
    <Route path="/" element={<Navigate to="/games" />} />
    <Route path="/apps" element={<AppSection />} />
    <Route path="/kids" element={<KidsSection />} />
    <Route path="/games" element={<Game />} />
  </Routes>
  ```

### 2. `KidsSection.jsx`
- **Purpose**: Displays teacher-approved apps and games for kids.
- **Props/Inputs**: None.
- **Usage Example**:
  ```jsx
  <KidsSection />
  ```

### 3. `Game.jsx`
- **Purpose**: Displays the games section with categorized content.
- **Props/Inputs**: None.
- **Usage Example**:
  ```jsx
  <Game />
  ``
---

## Functionality
1. **Games Section**:
   - Displays categorized games like "Top Charts" and "Popular Games."
   - Includes a responsive carousel for featured games.

2. **Apps Section**:
   - Lists top apps with categories like "Recommended for You" and "Productivity."
   - Includes a tabbed interface for "Top Free," "Top Grossing," and "Top Paid" apps.

3. **Kids Section**:
   - Features teacher-approved apps and games for kids.
   - Includes age filters for better content targeting.
---

### Branching Strategy
1. **Main Branch**:
   - Reserved for production-ready code.
   - Only stable and tested code from the `development` branch is merged there.

2. **Development Branch**:
   - Used as the branch to test out befre being put in main.
   - All team members merged their completed features into this branch after review.

3. **Feature Branches**:
   - Each team member created a feature branch for their assigned task.


### Collaboration Workflow
   - Tasks were divided among team members, and each member worked on their assigned feature in a separate branch.
   - Team members implemented their features and committed changes with descriptive commit messages.
   - Before merging into the `development` branch, pull requests were created for review by other team members.
   - After approval, feature branches were merged into the `development` branch.
   - Once all features were integrated and tested in the `development` branch, the code was merged into the `main` branch for deployment.

### 

## References
- [Google Play Store Design Guidelines](https://docs.google.com/presentation/d/1w9sbOdxwRDW8yB6RBrInw3tYg3AgvlEL/edit?usp=sharing)