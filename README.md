# task-tracker-backend
Task Tracker Backend

Default URL for all backend process: 'https://task-tracker-backend-production-0ddc.up.railway.app/authenticate/'

There are 4 'POST' methods to handle for tasks, that are, '/register', '/login', '/addTask' and 'getAllTasks'

JWT Method is used for secure LogIn and Registeration task.

'/register':- requires a valid email, password and confirm password.
'/login': requires a registered email and password.
'/addTask': requires a registered email and task to be added.
'/getAllTasks': requires a registered email to retrevie all tasks of any user.
