$(() => {
    // Slide toggle for contact form
    $('#email-me').on('click', function() {
        $('#contact-form').slideToggle();
    });
    // Contact form logic directly from FormSpree
    var form = document.getElementById('my-form');
    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById('my-form-status');
    var data = new FormData(event.target);
    fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = 'Thanks for your submission!';
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data['errors'].map(error => error['message']).join(', ');
              } else {
                status.innerHTML = 'Oops! There was a problem submitting your form'
              }
            });
          }
        }).catch(error => {
          status.innerHTML = 'Oops! There was a problem submitting your form'
        });
        setTimeout(() => {
            status.innerHTML = '';
        }, 4000);
    }
    form.addEventListener('submit', handleSubmit);
    // Dynamic Repo Repository
    $.ajax({
        url: 'https://raw.githubusercontent.com/ejach/ejach.github.io/master/pinned-repos.json',
        method: 'GET',
        dataType: 'json',
        success: function(repos) {
            const reposContainer = $('#pinned-repos');
            reposContainer.empty();
            repos.forEach(repo => {
                const language = repo.languages?.nodes?.length > 0 
                    ? repo.languages.nodes[0] 
                    : null;
                const languageColor = language ? language.color : '#ccc';
                const languageName = language ? language.name : 'Unknown';
                const repoCard = `
                    <div class="work-item">
                        <div class="work-content">
                            <h3>${repo.name}</h3>
                            <p>${repo.description || 'No description available.'}</p>
                            <div class="language">
                                <span class="language-color" style="background-color: ${languageColor};"></span>
                                <span class="language-name">${languageName}</span>
                            </div>
                            <a href="${repo.url}" target="_blank" class="repo-link">View on GitHub</a>
                        </div>
                    </div>`;
                reposContainer.append(repoCard);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching pinned repositories:', error);
            $('#pinned-repos').html('<p>Failed to load repositories. Please try again later.</p>');
        }
    });
    // Change the adjective in the hero section
    const adjectives = ['fast', 'safe', 'weird', 'clean', 'niche', 'fun', 'neat'];
    let index = 0;
    const $adjective = $('.adjective');

    $adjective.text(adjectives[index]);

    setInterval(function() {
        index = (index + 1) % adjectives.length;
        $adjective.css('transform', 'translateY(-24px)');
        setTimeout(function() {
            $adjective.text(adjectives[index]).css('transform', 'translateY(24px)');
            void $adjective[0].offsetWidth;
            $adjective.css('transform', 'translateY(0)');
        }, 300);
    }, 2500);
});