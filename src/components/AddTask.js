export const AddTask = () => {
    return `<form id = "taskForm" action="https://jsonplaceholder.typicode.com/" method="GET">
        <p>
            <label for="taskName">Task Name</label>
            <input type="text" id="taskName" name="taskName" required>
        </p>
        <p>
            <label for="section1Name">Section1</label>
            <input type="text" id="section1Name" name="section1Name" required>
            <label for="section1Duration">Duration</label>
            <input type="number" id="section1Duration" name="section1Duration">
        </p>
        <p>
            <label for="section2Name">Section2</label>
            <input type="text" id="section2Name" name="section2Name" required>
            <label for="section2Duration">Duration</label>
            <input type="number" id="section2Duration" name="section2Duration">
        </p>
        <p>
            <label for="section3Name">Section3</label>
            <input type="text" id="section3Name" name="section3Name" required>
            <label for="section3Duration">Duration</label>
            <input type="number" id="section3Duration" name="section3Duration">
        </p>
        <button type="submit">Add</button>
    </form>`;
}