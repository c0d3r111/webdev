// Secure window globals

const create      = window.create;
const Create      = create;
const composer    = window.composer;
const Composer    = composer;

// Application globals

const State       = {};
const Enums       = {
    type: [
        ['Select password type'],
        ['Only include letters',        1],
        ['Mix numbers and letters',     2],
        ['Include special characters',  3],
    ],
    size: [
        ['Select password size'],
        ['8 Characters',   8],
        ['10 Characters',  10],
        ['12 Characters',  12],
        ['14 Characters',  14],
        ['16 Characters',  16],
        ['18 Characters',  18],
        ['20 Characters',  20],
        ['24 Characters',  24],
        ['32 Characters',  32],
        ['56 Characters',  56],
        ['64 Characters',  64],
        ['96 Characters',  96],
        ['128 Characters', 128],
        ['196 Characters', 196],
        ['256 Characters', 256],
    ],
    questions: [
        'Pick a question',
        'What was your childhood nickname?',
        'What is the full name of your first love?',
        'Who was your first roommate?',
        'What are you most afraid of?',
        'What is the nickname of the person you love most?',
        'What school did you attend for sixth grade',
        'What was your childhood phone number?',
        'What is the company name of your first job?',
        'What is make and model of your first car?',
    ],
};
const Images      = {
    icons: {
        get check()  {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/></svg>`);
        },
        get cog()    {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z"/></svg>`);
        },
        get copy()   {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z"/></svg>`);
        },
        get direction() {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z"/></svg>`);
        },
        get export() {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Z"/></svg>`);
        },
        get import() {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"/></svg>`);
        },
        get lock()   {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"/></svg>`);
        },
        get logout() {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>`);
        },
        get moon()   {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>`);
        },
        get plus()   {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"/></svg>`);
        },
        get slider() {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"/></svg>`);
        },
        get sun()    {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>`);
        },
        get top()    {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2ZM8.71,7.71,11,5.41V17a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71Z"/></svg>`);
        },
        get trash()  {
            return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>`);
        }
    },
    get logo() {
        return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344 90"><defs/><path d="M115 45c0-4 1-8 3-11s5-6 8-7l9-3c4 0 7 1 10 4 2 2 4 5 4 9a20 20 0 01-11 18l-9 3c-4 0-8-2-10-4-3-2-4-5-4-9zm21-26a25 25 0 00-22 13c-3 4-4 8-4 13s2 9 5 13c3 3 8 4 13 4s9-1 13-3 7-5 9-9c3-4 4-8 4-13 0-6-2-10-5-13s-8-5-13-5zm29 26a8 8 0 018-7l4 1 1 3-1 3-3 17h5l3-18 1-3-2-5c-2-2-4-2-6-2-4 0-7 1-9 4v-4h-4l-5 28h5zm32-30l-9 47h5l8-47zm5 19l7 24-11 17h6l25-41h-6l-11 19-5-19zm52 11c0 4-1 7-4 9-2 3-5 4-8 4l-5-2-2-6v-2l1-1c0-3 1-5 3-6a10 10 0 0113-1l2 5zm-23 30l3-18c1 4 4 5 8 5 5 0 8-1 12-4 3-4 5-8 5-13 0-4-1-6-3-8-3-2-5-3-9-3s-7 1-10 5l1-5h-5l-7 41zm57-41l-1 5c0-2-1-3-3-4l-5-1c-4 0-8 1-12 4-3 4-5 8-5 13 0 4 1 6 4 8 2 2 4 3 8 3s7-1 10-5l-1 5h5l5-28zm-21 16c0-3 2-6 4-8 2-3 5-4 8-4l5 2 2 6c0 3-1 6-4 8-2 3-5 4-7 4l-5-2c-2-1-3-3-3-6zm33 2l-5 2 4 6c2 2 4 2 6 2 4 0 6 0 8-2 2-1 4-4 4-6 0-4-3-6-7-8l-4-2-2-3 2-2 3-1c3 0 5 1 6 3l4-2c0-2-2-3-3-4l-7-1c-2 0-5 0-7 2-2 1-2 3-2 5v3l2 2 2 2 2 1 3 1 2 2v2l-1 3-4 1-4-2c-2-1-2-2-2-4zm24 0l-4 2c0 3 1 4 3 6s4 2 7 2 6 0 8-2c2-1 3-4 3-6 0-4-2-6-6-8l-5-2-1-3 1-2 3-1c3 0 5 1 6 3l4-2c0-2-1-3-3-4l-6-1c-3 0-5 0-7 2-2 1-3 3-3 5v3l2 2a15 15 0 005 3l2 1 2 2 1 2-2 3-4 1-4-2-2-4z"/><path d="M0 45l45 45 45-45L45 0 0 45zm45 21L24 45h42L45 66z"/></svg>`)
    },
    get logoIcon() {
        return create.raw(`<svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 90 90"><defs/><defs><clipPath id="a"><path d="M0 0h90v90H0z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#FF9400" d="M0 45l45 45 45-45L45 0 0 45zm45 21L24 45h42L45 66z"/></g></svg>`);
    }
};
const Utils       = {
    cookie : {
        clear(name)         {
            return void this.set({
                name    : name,
                value   : '0',
                expires : -1,
            });
        },
        get(name)           {
            for (const part of document.cookie.split('&')) {
                const [item, value] = part.split('=');
    
                if (item === name) {
                    return value;
                }
            }
    
            return null;
        },
        set(data)           {
            if (!data.name || !data.value || !data.expires) {
                return null;
            }
    
            const equal  = '=';
            const close  = ';';
            const path   = 'path=/;';
            const age    = 'max-age=';
            const site   = 'samesite=strict';
            const secure = 'secure;';
    
            return void (document.cookie = (
                data.name    + 
                equal        + 
                data.value   + close +
                path         +
                age          +
                data.expires + close +
                site         +
                secure
            ));
        },
    },
    crypto : {
        browser(data)             {
            const secret     = data.browser + data.pin + data.cookie;
            const sum        = Utils.getCharSum(secret);
            const salt       = CryptoJS.SHA3(secret + sum);
            const iterations = Number(String(sum).slice(0, 3));
            const keySize    = 196;

            return CryptoJS.enc.Base64.stringify(CryptoJS.PBKDF2(secret, salt, {keySize, iterations}));
        },
        encrypt(data, secret)     {
            return String(CryptoJS.AES.encrypt(data, (secret || State.master)));
        },
        decrypt(data, secret)     {
            try {
                return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data, (secret || State.master)));
            }
            catch {
                return null;
            }
        },
        secret(pin, secret)       {
            const salt       = CryptoJS.SHA3((pin + State.iterations + secret));
            const iterations = Number(String(State.iterations).slice(0, 3));
            const keySize    = 256;

            return CryptoJS.enc.Base64.stringify(CryptoJS.PBKDF2(secret, salt, {keySize, iterations}));
        },
        password(hash)            {
            const salt       = CryptoJS.SHA3((hash + State.iterations));
            const iterations = Number(String(State.iterations).slice(0, 3))
            const keySize    = 384;

            return CryptoJS.enc.Base64.stringify(CryptoJS.PBKDF2(State.master, salt, {keySize, iterations}));
        },
        hash(data)                {
            return CryptoJS.enc.Base64.stringify(CryptoJS.SHA3(data));
        },
    },
    getCharSum(data)          {
        let sum = 0;

        void String(data).split('').forEach(c => void (sum += c.charCodeAt()));

        return sum;
    },
    getPrint()                {
        const canvas = document.createElement('canvas');
        const txt    = '!@#$%^&*()AabBcdDeEfgGhHiIjJklLmMnNopqQrstuvwWxyz';
        const ctx    = canvas.getContext("2d");

        ctx.textBaseline = "top";
        ctx.font         = "14px 'Arial'";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle    = "#c24a7a";

        void ctx.fillRect(1,1,283,353);

        ctx.fillStyle    = "#87fa91";

        void ctx.fillText(txt, 2, 15);

        ctx.fillStyle    = "rgba(194, 190, 149, 0.7)";

        void ctx.fillText(txt, 4, 17);

        return this.crypto.hash(canvas.toDataURL());
    },
    query(query)              {
        return create.raw(document.querySelector(query));
    },
    randomNumber(m, x)        {
        return Math.floor(Math.random() * (x - m)) + m;
    },
    randomString(size)        {
        return CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(size || 128));
    },
    safeParse(data)           {
        try {
            return JSON.parse(data);
        }
        catch {
            return null;
        }
    },
    select(name)              {
        return create.raw(document.getElementById(Composer.store[name])) || create.div;
    },

    
    get uid()                 {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
            + Math.random().toString(16).slice(2)
            + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
};

// Application methods

const Components  = {
    box    : {
        check(name, text)  {
            return create.div.names('checkbox').add([
                create.input.attr({type: 'checkbox'}).id(name),
                create.label.attr({for: composer.store[name]}).text(text),
            ]);
        },
        icon(name, label)  {
            return create.div.names('iconbox').add([
                name in Images.icons && Images.icons[name],
                create.span.text(label)
            ]);
        },
        password(name, id) {
            const next  = Control.show.modal.password(id);
            const del   = Control.remove.entry(id);
    
            return create.div.names('pwdbox').add([
                create.h2
                    .text(name.replace(Control.regHttp, ''))
                    .click(next),
                create.div.add([
                    create.div.add([
                        Images.icons.slider,
                        create.p.text('Config')
                    ]).click(next),
                    create.div.add([
                        Images.icons.trash,
                        create.p.text('Delete'),
                    ]).click(del)
                ])
            ]);
        },
        top()              {
            return create.div.names('top').add([
                Images.logo.navigate('/'),
                create.div.names('row').add([
                    Images.icons.moon.id(Names.moon).click(Control.show.theme).hide(!Control.isDark),
                    Images.icons.sun .id(Names.sun) .click(Control.show.theme).hide(Control.isDark),
                    Images.icons.lock.click(Control.state.lock),
                    Images.icons.logout.click(Control.state.logout)
                ])
            ]);
        }
    },
    modal  : {
        port(isImport) {
            const rid     = Utils.uid;
            const handler = isImport ? Control.util.import(rid) : Control.util.copy(Names.portfield);
            const text    = [
                'Export your encrypted ledger data. No derived passwords are ever saved, only custom passwords get saved in your encrypted ledger.',
                'Import ledger from a previous session. Ledger must match your current session data.'
            ];
            
            return Root.add(create.div.id(rid).names('overlay').add([
                create.div.names('modal')
                    .add(create.h2.text(isImport ? 'Import Ledger' : 'Export Ledger'))
                    .add(create.p.text(isImport ? text[1] : text[0]))
                    .add(create.textarea.id(Names.portfield))
                    .add(create.div.add([
                        create.button.text(isImport ? 'Import' : 'Copy').click(handler),
                        create.button.text('Cancel').click(Control.remove.modal(rid))
                    ]))
            ]));
        },
        password()     {
            const rid        = Utils.uid;
            const selections = ['type', 'size'].map(entry => create.select
                .id(Names['p' + entry])
                .on('change', Control.password.generate)
                .add(Enums[entry].map(value => create.option
                    .value(value[1])
                    .text(value[0]))));

            return Root.add(create.div.id(rid).names('overlay').add([
                create.div.names('modal')
                    .add(State.ledger[State.focus.hash].c ? null : selections)
                    .add(create.input
                        .id(Names.pvalue)
                        .attr({type: 'text', readonly: 1, placeholder: 'Generated Password...'}))
                    .add([
                        create.div.add([
                            create.button.text('Copy').click(Control.util.copy(Names.pvalue)),
                            create.button.text('Close').click(Control.remove.modal(rid))
                        ])
                    ])
                ]));
        },
    },
    option : {
        bar()       {
            return create.div.names('row options').add([
                Components.box.icon('plus', 'New Password').id(Names.oadd).click(Control.show.option(Names.optionadd)),
                Components.box.icon('export', 'Export Ledger').click(Control.show.modal.port()),
                Components.box.icon('import', 'Import Ledger').click(Control.show.modal.port(true)),
            ]);
        },
        add()       {
            return create.div.id(Names.optionadd).names('option hide').add([
                create.input.id(Names.addwebsite).attr({type: 'text', placeholder: 'Password identifier'}),
                create.input.id(Names.addpwd).attr({type: 'text', placeholder: 'Custom password'}),
                create.p.text(
                    'Setting a custom password will override derived passwords. Custom passwords are only saved per session and can not be derived, only imported from an exported ledger.'
                ),
                create.button.text('Save Entry').click(Control.password.add),
            ]);
        },
        questions() {
            return Enums.questions
                .map((value, index) => create.option
                    .value(index)
                    .text(value));
        },
    },
    
    footer()      {
        return create.footer.add([
            create.p.add([
                create.span.text('Made with '),
                create.span.names('color').html('&hearts;'),
                create.span.text(' by Reheem')
            ])
        ]);
    },
    message(text) {
        return create.div.names('message').text(text);
    },
};
const Modules     = {
    get copy() {
        return {
            auth: {
                title: "Account Recovery",
                intro: "The values entered below must never change, only enter values you'll never forget. Changing just one character will cause all derived passwords to be different.",
                phrase: 'Select a password, phrase or any string of text which is personal and unforgettable to you. This can be a personal affirmation, mantra or anything else. Must be at least 8 characters.',
                pin: "Select a series of five or more numbers you'll never forget. Use numbers like your social security number, important birthdate or anything else."
            }
        };
    },

    authorize(unlock) {
        return create.main.names('auth').add([
            Components.box.top(),
            create.div.names('wrap col').add([
                create.h2.text(this.copy.auth.title),
                create.div.id(Names.fullentropy).add([
                    create.p.text(this.copy.auth.intro),
                    create.select.id(Names.equestion).add(Components.option.questions()),
                    create.input.id(Names.eanswer).attr({type: 'text', placeholder: "Your answer"}),
                    create.p.text(this.copy.auth.phrase),
                    create.input.id(Names.ephrase).attr({type: 'text', placeholder: 'Your secret text'}),
                ]).hide(unlock),
                create.p.text(this.copy.auth.pin),
                create.input.id(Names.epin).attr({type: 'text', placeholder: 'Your pin', pattern: "[0-9]", value: ''}),
                create.button.text('Unlock').id(Names.ebutton).click(Control.state[unlock ? 'unlock' : 'restore']),
            ]),
            Components.footer()
        ]);
    },
    loader    () {
        return Body.add([
            create.div.names('loading').id(Names.loader).add([
                create.div.names('loader').add([
                    create.div,
                    create.div,
                    create.div,
                    create.div,
                ]),
                create.span.text('Generating Password...')
            ])
        ])
    },
    manager()         {
        return create.main.add([
            Images.icons
                .top
                .id(Names.scrolltop)
                .names('scrolltop')
                .hide()
                .click(Control.util.scrollTop),
            Components.box.top(),
            create.div.names('wrap col').add([
                create.input
                    .attr({type: 'search', placeholder: 'Search websites'})
                    .id(Names.search)
                    .on('focus', Control.util.hideOptions)
                    .on('input', Control.search.init),
                Components.option.bar(),
                Components.option.add(),
                create.div
                    .id(Names.searchholder)
                    .names('container')
                    .hide()
                    .on('pointerdown', Control.show.scroll)
                    .on('pointerup',   Control.show.scroll),
                create.div
                    .id(Names.pwdholder)
                    .names('container')
                    .on('pointerdown', Control.show.scroll)
                    .on('pointerup',   Control.show.scroll)
            ]),
            Components.footer()
        ]);
    },
};

// Application controller

const Control     = {
    password : {
        add(e)     {
            const node  = create.raw(e.target);
    
            void node.text('Saving...').attr({disabled: true});
    
            const entry = select(Names.addwebsite);
            const pwd   = select(Names.addpwd);
    
            if (!entry.element.value) {
                return void node.text('Try Again').attr({disabled: false});
            }
    
            const hash = Utils.crypto.hash(entry.element.value);
            const eid  = Utils.uid;
    
            if (State.ledger[hash]) {
                return void node.text('Exists, try again').attr({disabled: false});
            }
    
            State.ledger[hash]  = {
                n: entry.element.value,
                c: pwd.element.value || null
            };
            State.locators[eid] = hash;
            
            void select(Names.pwdholder).insert(Components.box.password(entry.element.value, eid).id(eid));
            void Control.state.save();
            void node.text('Entry Saved!');
            void entry.value();
            void pwd.value();
            void node.text('Save Entry').attr({disabled: false});
            void Control.show.option(Names.optionadd)();
        },
        create()   {
            void Modules.loader();

            let onlyLetterNums  = State.focus.type === 2;
            let onlyLetters     = State.focus.type === 1;
            let size            = Number(State.focus.size);
            let pool            = Utils.crypto.password(State.focus.hash);
            let poolLetters     = pool.replace(Control.regNonLetters, '');
            let poolLetterNums  = pool.replace(Control.regNonAlphaNum, '');
            let cursor          = size + State.focus.type;
    
            if (onlyLetters)    {
                return poolLetters.slice(cursor, cursor + size);
            }
            if (onlyLetterNums) {
                let selection = poolLetterNums.slice(cursor, cursor + size);
                let index     = cursor;
    
                while ((selection.match(Control.regOnlyNums)?.length || 0) < 2) {
                    void (selection = poolLetterNums.slice(index += size, index + size));
                    void (index + size > poolLetterNums.length ? index = 0 : 0);
                }
    
                return selection;
            }
            
            let specialSize     = State.specials.length;
            let specialPwd      = '';
            let total           = (size / 4) + 1;
            let count           = 0;
            let loops           = 0;
            let divisor         = 2;
    
            while (++count <= size) {
                void (cursor === specialSize ? (cursor = 0) : 0);
                void (loops++ % 8 === 0 ? (divisor += 1) : 0);
    
                if (count % divisor === 0) {
                    if (--total > 0) {
                        void(specialPwd += State.specials[(pool.charCodeAt(++cursor) * 997) % specialSize]);
    
                        continue;
                    }
                }
    
                void (specialPwd += pool[++cursor]);
            }
            
            void select(Names.loader).remove();
            
            return specialPwd;
        },
        generate() {
            const type = select(Names.ptype).element.value;
            const size = select(Names.psize).element.value;
            const node = select(Names.pvalue);
            const hash = State.focus.hash;
    
            if (State.ledger[hash].c)   return void node.value(State.ledger[hash].c);
            if (type == 0 || size == 0) return;
    
            State.focus.type = Number(type);
            State.focus.size = Number(size);
            
            return void node
                .declass('copied')
                .value(Control.password.create());
        },
    },
    state    : {
        clear()   {
            void localStorage.removeItem(Control.sessionKey);
            void localStorage.removeItem(Control.themeKey);
            void Utils.cookie.clear(Control.cookieKey);
    
            return;
        },
        lock()    {
            return void window.location.reload();
        },
        logout()  {
            void Control.state.clear();
            void window.location.reload();
    
            return;
        },
        restore() {
            void select(Names.ebutton).text('Decrypting account data...').attr({disabled: true});
            
            const browser = Utils.getPrint();
            const epin    = select(Names.epin);
            const invalid = Control.util.getAnswer(epin, 5, true);
    
            if (invalid) {
                return void select(Names.ebutton).text('Unlock').attr({disabled: false});
            }
    
            const cookie  = Utils.cookie.get(Control.cookieKey) || '';
            const secret  = Utils.crypto.browser({browser, pin: epin.element.value, cookie});
            const data    = Utils.safeParse(Utils.crypto.decrypt(State.sessionData, secret));
    
            if (!data || data.browser !== browser) {
                void Control.util.message('There was an error decrypting your data.');
                void localStorage.removeItem(Control.sessionKey);
                void Utils.cookie.clear(Control.cookieKey);
                void select(Names.ebutton).text('Unlock').attr({disabled: false}).click(Control.state.unlock);
                void select(Names.fullentropy).show();
    
                return;
            }
    
            void Object.assign(State, data);
            void Root.clear().add(Modules.manager());
            void Control.util.getLedger();
            void Control.util.getSpecials(epin.element.value.length);
    
            return;
        },
        save()    {
            return void localStorage.setItem(Control.ledgerKey, Utils.crypto.encrypt(JSON.stringify(State.ledger)));
        },
        unlock()  {
            const button    = select(Names.ebutton);
    
            void button.text('Creating master key...').attr({disabled: true});
    
            const equestion = select(Names.equestion);
            const eanswer   = select(Names.eanswer);
            const ephrase   = select(Names.ephrase);
            const epin      = select(Names.epin);
            const invalid   = (
                Control.util.getAnswer(equestion, 1, true, true) ||
                Control.util.getAnswer(eanswer, 3)               ||
                Control.util.getAnswer(ephrase, 8)               ||
                Control.util.getAnswer(epin, 5, true)
            );
    
            if (invalid) {
                return void button.text('Unlock').attr({disabled: false});
            }
            
            const answer      = eanswer.element.value;
            const pin         = epin.element.value;
            const phrase      = ephrase.element.value;
            const entropy     = String(answer + phrase + pin);
            
            State.iterations  = entropy.length * Number(equestion.element.value) * 97;
            State.master      = Utils.crypto.secret(pin, Utils.crypto.browser({browser: answer, pin, cookie: phrase}));
            State.browser     = Utils.getPrint();
    
            const session     = Utils.randomString();
            const sessionKey  = Utils.crypto.browser({browser: State.browser, pin, cookie: session});
            const sessionData = JSON.stringify({
                master     : State.master,
                iterations : State.iterations,
                browser    : State.browser,
            });
    
            void localStorage.setItem(Control.sessionKey, Utils.crypto.encrypt(sessionData, sessionKey));
            void Utils.cookie.set({name: Control.cookieKey, value: session, expires: Control.sessionTime});
            void Root.clear().add(Modules.manager());
            void Control.util.getLedger();
            void Control.util.getSpecials(epin.element.value.length);
    
            return;
        }
    },
    util     : {
        copy(id)                  {
            return function(e) {
                const node = create.raw(e.target);
                const pwd  = select(this.id);

                if (pwd.hasClass('copied')) {
                    return void Control.util.message('Only one copy allowed per generation. Reselect password.');
                }
    
                void node.text('Copied');
                void navigator.clipboard.writeText(pwd.element.value);
                void pwd.value();
                void setTimeout(() => {
                    void node.text('Copy');
                    void pwd.reclass('copied');
                }, 2500);
            }.bind({id})
        },
        fullScreen()              {
            if (window.matchMedia('(display-mode: fullscreen)').matches) {  
                void document.documentElement.requestFullscreen({ navigationUI: "hide" })
                    .then({})
                    .catch({});   
            }

            return void window.removeEventListener('pointerdown', Control.util.fullScreen);
        },
        getAnswer(node, min, num, question) {
            let value     = String(node.element.value);
            let highlight = null;
            
            if (question && value == 0) {
                void Control.util.message('You must select a question from the list.');
                void (highlight = true);
            }
            if (value.length < min) {
                void Control.util.message('Value must contain at least ' + min + ' characters.');
                void (highlight = true);
            }
            if (num && Control.regNums.test(value)) {
                void Control.util.message('Value must contain only numerical characters.');
                void (highlight = true);
            }
            if (highlight) {
                void node.style({border: '2px solid var(--focus)'});
                void setTimeout(() => node.style({borderColor: 'transparent'}), Control.messageTime);
            }
    
            return highlight;
        },
        getLedger()               {
            const ledgerData = Utils.safeParse(Utils.crypto.decrypt(localStorage.getItem(Control.ledgerKey)));
    
            if (!ledgerData) {
                return void localStorage.removeItem(Control.ledgerKey);
            }
    
            void Object.assign(State.ledger, ledgerData);
            void Object.keys(State.ledger).forEach(hash => {
                const focus = State.ledger[hash];
                const eid   = Utils.uid;
    
                void (State.locators[eid] = hash);
                void select(Names.pwdholder).insert(Components.box.password(focus.n, eid).id(eid));
            });
    
            return;
        },
        getSpecials(size)         {
            return void (State.specials = Array(size).fill('!@#$%^&*()_-=+?|').join(''));
        },
        hideOptions()             {
            return void select(Names.optionadd).names('option hide');
        },
        import(modal)             {
            return function(e) {
                const data   = select(Names.portfield).element.value;
                const button = create.raw(e.target);
    
                if (!data) {
                    return void button.flash('Paste data');
                }
    
                void select(this).remove();
    
                const ledgerData = Utils.safeParse(Utils.crypto.decrypt(data));
    
                if (!ledgerData) {
                    return void Control.util.message('Import failed. Data incompatible with your account.');
                }
    
                void Object.keys(ledgerData).forEach(hash => {
                    if (hash in State.ledger) return;
    
                    const focus = ledgerData[hash];
                    const eid   = Utils.uid;
        
                    void (State.locators[eid] = hash);
                    void select(Names.pwdholder).insert(Components.box.password(focus.n, eid).id(eid));
                });
                void Object.assign(State.ledger, ledgerData);
                void Control.state.save();
    
                return void Control.util.message('Import successful. Your ledgers have been merged and encrypted.');
            }.bind(modal);
        },
        message(text)             {
            return void Root.add(
                Components.message(text)
                    .style({right: '-75%'}, (Control.messageTime - 600))
                    .remove(Control.messageTime));
        },
        scrollTop()               {
            void document.body.scrollTo(0, 0);
            void window.scrollTo(0, 0);
            void select(Names.scrolltop).hide();
        }, 
    },
    remove   : {
        entry(id) {
            return function(e) {
                const node = create.raw(e.target);
                const span = create.raw(node.element.querySelector('p'));
                const hash = State.locators[this];

                if (!hash) {
                    return void select(this).remove();
                }
                if (node.hasClass('confirm')) {
                    delete State.ledger[hash];
                    delete State.locators[this];
                    void   Control.state.save();
                    
                    return void select(this).remove();
                }

                void node.names('confirm');
                void span.text('Confirm');
                void setTimeout(() => void node.declass('confirm') || void span.text('Delete'), 2e3);

                return;
            }.bind(id);
        },
        modal(id) {
            return function() {
                void (State.focus = {});
                void select(this).remove();
            }.bind(id);
        },
    },
    search   : {
        init()  {
            void (State.search = Date.now());
            void setTimeout(Control.search.query, 500);

            return;
        },
        query() {
            const now = Date.now();

            if (now - (State.search || 0) < 300)  {
                return void (State.searching = false);
            }
            if (State.searching) {
                return;
            }

            void (State.searching = true);

            const frag  = document.createDocumentFragment();
            const query = select(Names.search).element.value || '';

            if (query.length < 2) {
                void select(Names.pwdholder).show();
                void select(Names.searchholder).hide();
                void (State.searching = false);

                return;
            }

            void Object.keys(State.locators).forEach(eid => {
                const hash  = State.locators[eid];
                const focus = State.ledger[hash];

                return !focus ||
                    focus.n.indexOf(query) === -1 ||
                    void frag.appendChild(Components.box.password(focus.n, eid).element);
            });

            if (!frag.firstChild) {
                return void (State.searching = false);
            }

            void select(Names.pwdholder).hide();
            void select(Names.searchholder)
                .clear()
                .show()
                .element.appendChild(frag);

            return void (State.searching = false);
        },
    },
    show     : {
        modal: {
            password(id)   {
                return function() {
                    void (State.focus.hash = State.locators[this]);
                    void Control.util.hideOptions();
                    void Components.modal.password();
                    void Control.password.generate();
                }.bind(id)
            },
            port(isImport) {
                return function() {
                    void Control.util.hideOptions();
                    void Components.modal.port(this.isImport);
                    
                    return !this.isImport
                        ? void select(Names.portfield).value(localStorage.getItem(Control.ledgerKey))
                        : null;
                }.bind({isImport})
            },
        },

        option(name)        {
            return function() {
                void select(this).toggle('hide');
            }.bind(name);
        }, 
        scroll()            {
            const rect = select(Names.pwdholder).element.getBoundingClientRect();

            return void select(Names.scrolltop).show().hide(rect.top < 0);
        },
        theme()             {
            void    Body.toggle('dark').toggle('light');
            void    (!Control.isDark  && select('moon').hide() && select('sun').show());
            void    (Control.isDark && select('moon').show() && select('sun').hide());
            void    (Control.isDark = !Control.isDark);
            void    localStorage.setItem(Control.themeKey, Control.isDark ? 'dark' : 'light');
        },
    },
};

const Names            = new Proxy({}, {get: (_, prop) => prop});
const Body             = create.raw(document.body);
const Root             = create.div;
const select           = Utils.select;
const query            = Utils.query;

Control.regHttp        = /^(http[s]?:\/\/)/;
Control.regNums        = /[^0-9]/;
Control.regLetters     = /[a-z]/gi;
Control.regOnlyNums    = /[0-9]/g;
Control.regNonLetters  = /[^a-z]/gi;
Control.regNonAlphaNum = /[^a-z0-9]/gi;
Control.messageTime    = 2500;
Control.sessionTime    = 604800;
Control.sessionKey     = 'onlypass_session_data';
Control.ledgerKey      = 'onlypass_ledger_data';
Control.cookieKey      = 'onlypass_cookie';
Control.themeKey       = 'onlypass_theme';
Control.isDark         = localStorage.getItem(Control.themeKey) === 'light' ? false : true;

State.sessionData      = localStorage.getItem(Control.sessionKey);
State.ledger           = {};
State.locators         = {};
State.focus            = {};

void Body.add(Root).names(Control.isDark ? 'dark' : 'light');
void Root.add(Modules.authorize(!Boolean(State.sessionData)));
void window.addEventListener('pointerdown', Control.util.fullScreen);

if ('serviceWorker' in navigator) {
    void window.addEventListener('load', () => void navigator
        .serviceWorker
        .register('./app.worker.js'));
}



