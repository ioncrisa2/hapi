export const routes = [
    {
        method:'GET',
        path:'/',
        handler:(request, h) => {
            return 'homepage';
        }
    },
    {
        method:'*',
        path:'/',
        handler:(request, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut!!`
        }
    },
    {
        method:'GET',
        path:'/about',
        handler:(request, h) => {
            return 'about page';
        }
    },
    {
        method:'*',
        path:'/about',
        handler:(request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!!'
        }
    },
    {
        method:'*',
        path:'/{any}',
        handler:(request, h) => {
            return 'Halaman tidak ditemukan!'
        }
    },
    {
        method:'GET',
        path:'/users/{name}/{username?}',
        handler:(request, h) => {
            const {username = undefined, name } = request.params;
            return `Hello ${name}, your username is ${username}`;
        }
    },
    {
        method:'GET',
        path:'/hello/{name?}',
        handler: (request, h) => {
            const {name = 'stranger'} = request.params;
            const {lang} = request.query;

            if(lang === 'id'){
                return `Hai, ${name}`;
            }

            return `Hello ${name}`;
        }
    },
    {
        method:'POST',
        path:'/login',
        handler:(request, h) => {
            const {username, password} = request.payload;
            return `Welcome ${username}`;
        }
    },
    {
        method:'POST',
        path:'/user',
        handler:(request, h) => {
            return h.response('created').code(201).header('application/json');
        }
    }
];

