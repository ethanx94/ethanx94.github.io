window.addEventListener('load', async() => {
  const response = await fetch(
    "https://gist.githubusercontent.com/ethanx94/b130e3098fb28604339a026964e4e6c0/raw/personal-site.json"
  );
  if (response.status === 200) {
    const {
      about,
      edu,
      work,
    } = await response.json();
    document.getElementById('bio').innerHTML = about;
    edu.forEach(({
      yearStart,
      yearEnd,
      degrees,
      courses,
      location,
    }) => {
      document.getElementById('edu-grids').innerHTML += `
        <div class="col-md-6 edu-grid">
          <p>${yearStart} - ${yearEnd}</p><span>Graduated</span>
          <div class="edu-border">
              <div class="edu-grid-master">
                  ${degrees.map(degree => `<h3>${degree}</h3>`).join('').toUpperCase()}
                  <h4>${location}</h4>
              </div>
              <div class="edu-grid-info category">
                  <ul>
                    ${courses.map(course => `<li>${course}</li>`).join('')}
                  </ul>
              </div>
          </div>
        </div>`;
    });
    let workHtml = '';
    work.forEach(({
      yearStart,
      yearEnd,
      name,
      positions,
      description,
    }, idx) => {
      workHtml += 
        idx % 2 === 0
          ? '<div class="row">'
          : '';
      
      workHtml += `
        <div class="col-md-6 w-grid">
            <div class="work-grid">
                <h3>${yearStart} - ${yearEnd ? yearEnd : 'Current'}</h3>
                <div class="work-grid-info">
                    <h4>${name}</h4>
                    ${positions.map(position => `<h5>${position}</h5>`).join('').toUpperCase()}
                    <p>${description}</p>
                </div>
            </div>
        </div>`;

      workHtml += 
        idx % 2 !== 0
          ? '</div>'
          : '';
        });
      document.getElementById('work-grids').innerHTML = workHtml;
  };
}, false);