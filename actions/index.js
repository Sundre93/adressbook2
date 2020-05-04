export function addName(title) {
    return {type: "NAME_ADD", title: title};

}

export function NameFill()
{
    document.getElementById("kontakt-form-firstname") .value = "Peter";
    document.getElementById("kontakt-form-lastname").value = "Müller";
    document.getElementById("kontakt-form-email").value = "peter.mueller@gmail.com";
    document.getElementById("kontakt-form-address").value = "Müllerweg 24";
    document.getElementById("kontakt-form-stadt").value = "Petersberg";
    document.getElementById("kontakt-form-plz").value = "12345";

}

