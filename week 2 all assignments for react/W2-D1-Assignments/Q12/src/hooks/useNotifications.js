export const scheduleNotification = (task) => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  
    const taskDueTime = new Date(task.dueDate).getTime();
    const reminderTimeInMillis = task.reminderTime * 60 * 1000;
  
    const notificationTime = taskDueTime - reminderTimeInMillis;
    const now = new Date().getTime();
  
    const timeUntilNotification = notificationTime - now;
  
    if (timeUntilNotification > 0) {
      setTimeout(() => {
        new Notification('Task Reminder', {
          body: `Task "${task.title}" is due soon!`,
        });
      }, timeUntilNotification);
    }
  };
  