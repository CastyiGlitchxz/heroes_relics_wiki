export let notification = {
    init_notification: function (title = "", nxa_icon = "", callback = this.callback_function()) {
        let notify = new Notification(title, {
            icon: nxa_icon,
        });
        callback();
        this.callback_function
        return notify;
    },

    callback_function: function (callback_params = new Function()) {
        return callback_params
    }
}

let device_id = {

}