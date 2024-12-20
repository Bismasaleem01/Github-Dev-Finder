function getUser() {
    let userName = document.getElementById('searchField').value;
    let imageCont = document.getElementById('imageSelf');
    let nameCont=document.getElementById('name-container');
    let repos=document.getElementById('noOfRepos');
    let followers=document.getElementById('noOfFollowers');
    let following1=document.getElementById('noOfFollwoing');
    let locat=document.getElementById('locationBox');
    let blo=document.getElementById('blogBox');
    let emai=document.getElementById('emailBox');
    let comp=document.getElementById('companyBox');

    fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then((user) => {
            imageCont.src= user.avatar_url;
            nameCont.innerHTML = `<span>${user.name}</span><br><span></span><p>${user.bio}</p>`
            repos.innerHTML= `${user.public_repos}`;
            followers.innerHTML= `${user.followers}`;
            following1.innerHTML=`${user.following}`;
            locat.innerHTML=`${user.location || "null"}`;
            blo.innerHTML=`${user.blog || "null"}`;
            emai.innerHTML=`${user.email || "null"}`;
            comp.innerHTML=`${user.company || "null"}`;
        })
        .catch((error) => {
            imageCont.src= "./error-img.webp";
            nameCont.innerHTML = `<span style="color:red;">User not found</span>`
            repos.innerHTML= "N/A";
            followers.innerHTML= "N/A";
            following1.innerHTML="N/A";
            locat.innerHTML="N/A";
            blo.innerHTML="N/A";
            emai.innerHTML="N/A";
            comp.innerHTML="N/A";
        });
}
