export const Add = () => {
    return `<form id = "taskForm">
        <p>
            <label for="taskName">Task Name</label>
            <input type="text" id="taskName" name="taskName" required>
        </p>
        <p>
            <label for="sectionCount">Number of sections</label>
            <input type="number" id="sectionCount" min="1" required>
        </p>
        <div id="sectionInput"></div>
        <button type="button" id="sectionButton">Next</button>
        <button type="submit">Add</button>
    </form>`;
}