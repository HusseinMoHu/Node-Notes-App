# Notes Application

Use terminal to ( **add** - **remove** - **read** - **list** ) notes.

## How to use

Run ``` $ npm install ``` to reload node_modules directory.

- Add a new note

    ```bash
    node app.js add --title="Shopping" --body="Carrot, Apple, Potato"
    ```

- Read the specific note by title

    ```bash
    node app.js read --title="Shopping"
    ```

- Remove existing note

    ```bash
    node app.js remove --title="Shopping"
    ```

- List all your notes

    ```bash
    node app.js list
    ```

Run ``` $ node app.js --help ``` to show all commands created in notes-app.

