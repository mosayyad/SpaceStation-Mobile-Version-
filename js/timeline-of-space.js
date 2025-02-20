document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
      {
        side: 'left',
        name: 'Konstantin Tsiolkovsky',
        years: '1857-1935',
        description: 'Father of astronautic theory. Proposed rocket propulsion in space exploration.',
        extra: '"Earth is the cradle of humanity, but one cannot live in a cradle forever."'
      },
      {
        side: 'right',
        name: 'Robert Goddard',
        years: '1882-1945',
        description: 'Launched first liquid-fueled rocket. Held 214 patents in rocketry.'
      },
      {
        side: 'left',
        name: 'Serene Tazkout',
        years: 'Born 1985',
        description: 'Leading scientist in space technology and the first woman from the Arab world to hold a major leadership position at a European Space Agency mission.',
        extra: '"The space sector needs diversity to truly progress."'
      },
      {
        side: 'right',
        name: 'Ahmed Farouk',
        years: 'Born 1980',
        description: 'Chief Engineer at the Egyptian Space Agency. Known for contributions to satellite development and the advancement of space exploration programs in Egypt.'
      },
      {
        side: 'left',
        name: 'Dr. Farouk El-Baz',
        years: 'Born 1938',
        description: 'Geologist and space scientist. Worked with NASA on the Apollo lunar program. Contributed to selecting lunar landing sites for Apollo missions.'
      },
      {
        side: 'right',
        name: 'Yuri Gagarin',
        years: 'April 12, 1961',
        description: 'Spacecraft: Vostok 1<br>Achievements:<br>First human in space and to orbit Earth.<br>Completed one orbit in 108 minutes.<br>Historic milestone in space exploration.'
      },
      {
        side: 'left',
        name: 'Alan Shepard',
        years: 'May 5, 1961',
        description: 'Spacecraft: Mercury-Redstone 3<br>Achievements:<br>First American in space.<br>15-minute suborbital flight.<br>Paved the way for future U.S. space missions.'
      },
      {
        side: 'right',
        name: 'John Glenn',
        years: 'February 20, 1962',
        description: 'Spacecraft: Mercury-Atlas 6<br>Achievements:<br>First American to orbit Earth (3 orbits).<br>Mission duration: 4 hours, 55 minutes.<br>Key figure in advancing manned spaceflight.'
      },
      {
        side: 'left',
        name: 'Valentina Tereshkova',
        years: 'June 16, 1963',
        description: 'Spacecraft: Vostok 6<br>Achievements:<br>First woman in space.<br>Spent 3 days in space, completing 48 orbits.<br>Conducted scientific experiments and Earth observations.'
      },
      {
        side: 'right',
        name: 'Alexei Leonov',
        years: 'March 18, 1965',
        description: 'Spacecraft: Voskhod 2<br>Achievements:<br>First spacewalk (12 minutes outside the spacecraft).<br>Pioneered extravehicular activity (EVA).'
      },
      {
        side: 'left',
        name: 'Neil Armstrong',
        years: 'July 20, 1969',
        description: 'Spacecraft: Apollo 11<br>Achievements:<br>First human to walk on the Moon.<br>Famous quote: "That\'s one small step for man, one giant leap for mankind."<br>Collected lunar samples and conducted experiments.'
      },
      {
        side: 'right',
        name: 'Buzz Aldrin',
        years: 'July 20, 1969',
        description: 'Spacecraft: Apollo 11<br>Achievements:<br>Second person to walk on the Moon.<br>Assisted in lunar sample collection and experiments.'
      },
      {
        side: 'left',
        name: 'Michael Collins',
        years: 'July 20, 1969',
        description: 'Spacecraft: Apollo 11<br>Achievements:<br>Remained in lunar orbit during the Moon landing.<br>Played a critical role in mission success and communication.'
      },
      {
        side: 'right',
        name: 'Sally Ride',
        years: 'June 18, 1983',
        description: 'Spacecraft: Challenger (STS-7)<br>Achievements:<br>First American woman in space.<br>Conducted experiments on microgravity and materials.'
      }
    ];
  
    const timelineContainer = document.getElementById('timelineContent');
  
    timelineData.forEach(item => {
      const entryDiv = document.createElement('div');
      entryDiv.className = `timeline-entry ${item.side}`;
  
      const cardDiv = document.createElement('div');
      cardDiv.className = 'entry-card p-4 mb-4';
  
      const titleEl = document.createElement('h2');
      titleEl.innerHTML = `${item.name} <span class="year">${item.years}</span>`;
      cardDiv.appendChild(titleEl);
  
      const descEl = document.createElement('p');
      descEl.innerHTML = item.description;
      cardDiv.appendChild(descEl);
  
      if (item.extra) {
        const extraEl = document.createElement('div');
        extraEl.className = 'quote fst-italic';
        extraEl.textContent = item.extra;
        cardDiv.appendChild(extraEl);
      }
      
      entryDiv.appendChild(cardDiv);
      timelineContainer.appendChild(entryDiv);
    });
  
    // Animate entries as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.filter = 'blur(0)';
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  
    document.querySelectorAll('.timeline-entry').forEach((entry) => {
      entry.style.transform = 'translateY(30px) scale(0.95)';
      entry.style.opacity = 0;
      entry.style.filter = 'blur(2px)';
      entry.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(entry);
    });
  });