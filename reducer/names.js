let initialState=[
{id:1, title:"Peter Müller"},
{id:2, title:"Lischen Müller"},
{id:3,title:"Emma Sommer"},
{id:4,title:"Franz Winter"}
];

function names(state=initialState, action) {
    if (action.type == "NAME_ADD") {

        let maxNameId = 0;
        for (let name of state) {
            if (name.id > maxNameId) {
                maxNameId = name.id;
            }
        }
        return [].concat(state, [{id: maxNameId + 1, title: action.title}])

        return state;
    }
}

export default names;
