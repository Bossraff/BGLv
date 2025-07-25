// qa.js

// QA team data for each branch
const qaTeams = {
  mabini: [
    { name: 'Maria Gomez', email: 'maria.gomez@bigoprortal.com', phone: '+63 912 111 2222' },
    { name: 'Luis Fernandez', email: 'luis.fernandez@bigoprortal.com', phone: '+63 912 333 4444' }
  ],
  ecoland: [
    { name: 'Ramon Diaz', email: 'ramon.diaz@bigoprortal.com', phone: '+63 912 555 6666' },
    { name: 'Isabel Mendoza', email: 'isabel.mendoza@bigoprortal.com', phone: '+63 912 777 8888' }
  ],
  digos: [
    { name: 'Miguel Ramirez', email: 'miguel.ramirez@bigoprortal.com', phone: '+63 912 999 0000' },
    { name: 'Sofia Torres', email: 'sofia.torres@bigoprortal.com', phone: '+63 912 123 4567' }
  ]
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const branch = getQueryParam('branch');
  const branchTitle = document.getElementById('branch-title');
  const qaList = document.getElementById('qa-list');

  if (branch && qaTeams[branch]) {
    branchTitle.textContent = `QA Team - ${branch.charAt(0).toUpperCase() + branch.slice(1)}`;
    qaTeams[branch].forEach(member => {
      const div = document.createElement('div');
      div.style.marginBottom = '20px';
      div.innerHTML = `
        <h3>${member.name}</h3>
        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
        <p>Phone: ${member.phone}</p>
      `;
      qaList.appendChild(div);
    });
  } else {
    branchTitle.textContent = 'QA Team';
    qaList.innerHTML = '<p>No QA information found for this branch.</p>';
  }
});

