async function getUser() {
    const username = document.getElementById("username").value;
    const profileDiv = document.getElementById("profile");

    if (!username) {
        profileDiv.innerHTML = "<p>Please enter a GitHub username.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("User not found");
        
        const user = await response.json();
        
        profileDiv.innerHTML = `
            <div class="profile-container">
                <img src="${user.avatar_url}" alt="User Avatar">
                <h3>${user.name || "No Name Provided"}</h3>
                <p>@${user.login}</p>
                <p>Followers: ${user.followers}</p>
                <p>Repositories: ${user.public_repos}</p>
                <p>${user.bio || "No Bio Available"}</p>
                <a href="${user.html_url}" target="_blank">View Profile</a>
            </div>
        `;
    } catch (error) {
        profileDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
