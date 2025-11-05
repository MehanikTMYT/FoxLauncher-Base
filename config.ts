import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: true,
    maximizable: true,
    fullscreenable: true,
    title: 'Fox Launcher',
};

export const api = {
    grpc: 'http://mehhost.ru:1371',
    web: 'http://mehhost.ru:1370',
    publicKey,
};

export const appPath = '.fox-launcher';

export const discordRPC = {
    appId: '1233096203395137677',
    default: {
        firstLineText: 'В главном меню',
        secondLineText: 'Готовится к запуску Minecraft',
        buttons: [
            {
                label: 'Сайт проекта',
                url: 'https://mehhost.ru',
            },
            {
                label: 'Регистрация',
                url: 'https://mehhost.ru/register',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Fox Launcher',
        smallImageText: 'Minecraft',
    },
    profile: {
        firstLineText: 'Выбор профиля',
        secondLineText: 'Загрузка мира: {server}',
        buttons: [
            {
                label: 'Сайт проекта',
                url: 'https://mehhost.ru',
            },
            {
                label: 'Регистрация',
                url: 'https://mehhost.ru/register',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Fox Launcher',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'В игре',
        secondLineText: 'Игрок: {nickname}',
        buttons: [
            {
                label: 'Сайт проекта',
                url: 'https://mehhost.ru',
            },
            {
                label: 'Регистрация',
                url: 'https://mehhost.ru/register',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Fox Launcher',
        smallImageText: 'Minecraft',
    },
};