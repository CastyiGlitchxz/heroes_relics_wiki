/**
 * App Scope is the main body function for airis ui apps
 */
const create_body = function () {
    const app_body = document.createElement('app');
    app_body.classList.add("airis-app");
    app_body.classList.add("body");
    document.body.appendChild(app_body);
}

class HTML_RENDERER {
    constructor(html) {
        this.html = html
    }

    render(text) {
        let airis_body = document.getElementsByClassName("airis-app")[0];
        airis_body.innerHTML += text;
    }
}

export const app_scope = {
    run: function (app_func = new Function()) {
        create_body();
        if (app_func != null) {
            app_func.call();
        } else {
            this.app();
        }
    },

    app: function () {
        text.create("You have no code in app_scope.", {
            foreground: 'white',
            font_size: 45,
        });

        text.create("Use 'app_scope.app = function () {}' in your javascript file to get started", {
            foreground: 'white',
            font_size: 45,
        });

        return 0;
    },

    onload: function () {
        return 0;
    },

    add_child: function (content) {
        let airis_body = document.getElementsByClassName("airis-app")[0]
        airis_body.appendChild(content);
    },

    set_name: function (name) {
        document.title = name;
    }
}

/**
 * This function creates a ui button
 */
export const button = {
    create: function (text = "", style = {background: "", foreground: "", font_size: 0, width: 0, height: 0, border: {corner_radius: 0, border_color: "", border_style: "", border_width: 0}}) {
        const button = document.createElement('button');
        button.innerHTML = text;
        app_scope.add_child(button);

        const style_properties = {
            'background': this.background(button, style.background),
            'foreground': this.foreground(button, style.foreground),
            'font-size': this.font_size(button, style.font_size),
            'width': this.width(button, style.width),
            'height': this.height(button, style.height),
            'border': this.border(button, style.border.border_color, style.border.border_style, style.border.border_width),
            'corner_radius': this.corner_radius(button, style.border.corner_radius),
        }

        style = style_properties;

        return button;
    },

    background: function (target = new HTMLButtonElement(), color = "") {
        target.style.setProperty('background', color);
    },

    foreground: function (target = new HTMLButtonElement(), color = "") {
        target.style.setProperty('color', color);
    },

    font_size: function (target = new HTMLButtonElement(), size = 16) {
        target.style.setProperty('font-size', size + "px");
    },

    width: function (target = new HTMLButtonElement(), int = 220) {
        target.style.setProperty('width', int + "px");
    },

    height: function (target = new HTMLButtonElement(), int = 90) {
        target.style.setProperty('height', int + "px");
    },

    corner_radius: function (target = new HTMLButtonElement(), int = 0) {
        target.style.setProperty('border-radius', int + "px");
    },

    border: function (target = new HTMLButtonElement(), color = "", style = "", width = 1) {
        target.style.setProperty('border-width', width + "px");
        target.style.setProperty('border-color', color);
        target.style.setProperty('border-style', style);
    },
}

/**
 * This function creates a ui text
 */
export const text = {
    create: function (text = "", style = {foreground: "", font_size: 0}) {
        const elem_text = document.createElement('text');
        elem_text.innerHTML = text;
        app_scope.add_child(elem_text);

        const style_properties = {
            'foreground': this.foreground(elem_text, style.foreground),
            'font_size': this.font_size(elem_text, style.font_size),
        }

        style = style_properties;

        return elem_text;
    },

    foreground: function (target = new HTMLParagraphElement(), color = "") {
        target.style.setProperty('color', color);
    },

    font_size: function (target = new HTMLParagraphElemen(), size = 16) {
        target.style.setProperty('font-size', size + "px")
    }
}

/**
 * This function creates a ui header(h1)
 */
export const header = {
    create: function (text = "", style = {foreground: "", font_size: 0}) {
        const header = document.createElement('h1');
        header.innerHTML = text;
        app_scope.add_child(header);

        const style_properties = {
            'foreground': this.foreground(header, style.foreground),
            'font_size': this.font_size(header, style.font_size)
        }

        style = style_properties;

        return header;
    },

    foreground: function (target = new HTMLParagraphElement(), color = "") {
        target.style.setProperty('color', color);
    },

    font_size: function (target = new HTMLParagraphElement, size = 30) {
        target.style.setProperty('font-size', size + "px")
    }
}

export const div = {
    create: function (content = [], style = {background: "", foreground: "", orientation: "", width: 0, height: 0, content_alignment: ""}) {
        const div = document.createElement('div');
        app_scope.add_child(div);

        const style_properties = {
            'background': this.background(div, style.background),
            'foreground': this.foreground(div, style.foreground),
            'display': this.display(div, style.orientation),
            'height': this.height(div, style.height),
            'width': this.width(div, style.width),
            'content_alignment': this.align_content(div, style.content_alignment),
        }

        style = style_properties;

        // for (let index = 0; index < content.length; index++) {
        //     this.add_child(div, content[index])
        // }
        this.add_child(div, content)

        return div;
    },

    background: function (target = new HTMLDivElement, color = "") {
        target.style.setProperty('background', color);
    },

    foreground: function (target = new HTMLDivElement, color = "") {
        target.style.setProperty('color', color);
    },

    display: function (target = new HTMLDivElement, orientation = "") {
        target.style.setProperty('display', orientation);
    },

    add_child: function (parent, content) {
        for (let index = 0; index < content.length; index++) {
            parent.appendChild(content[index]);
        }
    },

    width: function (target = new HTMLDivElement(), int = 120) {
        target.style.setProperty('width', int + "px");
    },

    height: function (target = new HTMLDivElement(), int = 30) {
        target.style.setProperty('height', int + "px");
    },

    align_content: function (parent = new HTMLDivElement(), position = "") {
        parent.style.setProperty('align-items', position);
        parent.style.setProperty('align-content', position);
    }
}

export const textbox = {
    create: function (value, placeholder, style = {background: "", foreground: "", font_size: 0, width: 0, height: 0, border: {corner_radius: 0, border_color: "", border_style: "", border_width: 0}, outline: {outline_color: "", outline_style: "", outline_width: 0}}) {
        const textbox = document.createElement('input');
        textbox.type = "text";
        app_scope.add_child(textbox);

        const style_properties = {
            'background': this.background(textbox, style.background),
            'foreground': this.foreground(textbox, style.foreground),
            'font-size': this.font_size(textbox, style.font_size),
            'width': this.width(textbox, style.width),
            'height': this.height(textbox, style.height),
            'border': this.border(textbox, style.border.border_color, style.border.border_style, style.border.border_width),
            'corner_radius': this.corner_radius(textbox, style.border.corner_radius),
            'outline': this.outline(textbox, style.outline.outline_color, style.outline.outline_style, style.outline.outline_width),
        }

        style = style_properties;

        this.set_value(textbox, value);
        this.placeholder(textbox, placeholder);

        return textbox;
    },

    get_value: function (target = new HTMLInputElement()) {
        return target.value;
    },

    set_value: function (target = new HTMLInputElement(), value = "") {
        target.value = value;
    },

    placeholder: function (target = new HTMLInputElement(), value = "") {
        target.placeholder = value;
    },

    background: function (target = new HTMLInputElement(), color = "") {
        target.style.setProperty('background', color);
    },

    foreground: function (target = new HTMLInputElement(), color = "") {
        target.style.setProperty('color', color);
    },

    font_size: function (target = new HTMLInputElement(), size = 16) {
        target.style.setProperty('font-size', size + "px");
    },

    width: function (target = new HTMLInputElement(), int = 220) {
        target.style.setProperty('width', int + "px");
    },

    height: function (target = new HTMLInputElement(), int = 90) {
        target.style.setProperty('height', int + "px");
    },

    corner_radius: function (target = new HTMLInputElement(), int = 0) {
        target.style.setProperty('border-radius', int + "px");
    },

    border: function (target = new HTMLInputElement(), color = "", style = "", width = 1) {
        target.style.setProperty('border-width', width + "px");
        target.style.setProperty('border-color', color);
        target.style.setProperty('border-style', style);
    },

    outline: function (target = new HTMLInputElement(), color = "", style = "", width = 1) {
        target.style.setProperty('outline-width', width + "px");
        target.style.setProperty('outline-color', color);
        target.style.setProperty('outline-style', style);
    },
}

export const render_html = {
    html_defualt: function (code = ``) {
        let renderer = new HTML_RENDERER();
        renderer.render(String(code))
        return(code)
    }
}