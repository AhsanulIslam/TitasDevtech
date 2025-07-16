import React, { useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';


const teamMembers = [
  {
    role: 'Managing Director',
    members: [
      {
        name: 'Md Al Mamun',
        qualification: 'BSc in Civil Engineering, BUET',
        image: '/team/md-al-mamun.jpg',
        bio: 'Over 15 years of experience in leading engineering projects with excellence and integrity.'
      },
      {
        name: '[Second Director]',
        qualification: 'MBA, University of Dhaka',
        image: '/team/director-2.jpg',
        bio: 'Strategic thinker focused on client relationships and business development.'
      }
    ]
  },
  {
    role: 'General Manager (GM)',
    members: [
      {
        name: '[GM Name]',
        qualification: 'MSc in Structural Engineering, RUET',
        image: '/team/gm.jpg',
        bio: 'Experienced in large-scale infrastructure development and project supervision.'
      }
    ]
  },
  {
    role: 'Assistant General Manager (AGM)',
    members: [
      {
        name: '[AGM One]',
        qualification: 'BSc in Civil Engineering',
        image: '/team/agm1.jpg',
        bio: 'Skilled in team coordination and technical leadership.'
      },
      {
        name: '[AGM Two]',
        qualification: 'MBA in Project Management',
        image: '/team/agm2.jpg',
        bio: 'Bridges technical delivery with client needs and expectations.'
      }
    ]
  },
  {
    role: 'Accounts & Admin',
    members: Array.from({ length: 5 }, (_, i) => ({
      name: `Account/Admin ${i + 1}`,
      qualification: 'BBA/MBA in Accounting or Management',
      image: `/team/account${i + 1}.jpg`,
      bio: 'Handles financial reporting and administrative operations.'
    }))
  },
  {
    role: 'Senior Project Manager',
    members: Array.from({ length: 5 }, (_, i) => ({
      name: `Sr. Project Manager ${i + 1}`,
      qualification: 'BSc in Civil Engineering',
      image: `/team/srpm${i + 1}.jpg`,
      bio: 'Leads complex construction projects with efficiency and precision.'
    }))
  },
  {
    role: 'Project Manager',
    members: Array.from({ length: 10 }, (_, i) => ({
      name: `Project Manager ${i + 1}`,
      qualification: 'BSc/Diploma in Civil Engineering',
      image: `/team/pm${i + 1}.jpg`,
      bio: 'Ensures smooth execution of daily site activities.'
    }))
  },
  {
    role: 'Site Engineer',
    members: Array.from({ length: 10 }, (_, i) => ({
      name: `Site Engineer ${i + 1}`,
      qualification: 'Diploma in Civil Engineering',
      image: `/team/se${i + 1}.jpg`,
      bio: 'Responsible for on-site quality and technical compliance.'
    }))
  },
  {
    role: 'Site Manager',
    members: Array.from({ length: 5 }, (_, i) => ({
      name: `Site Manager ${i + 1}`,
      qualification: 'BSc in Civil Engineering or related field',
      image: `/team/sitemanager${i + 1}.jpg`,
      bio: 'Oversees site operations and ensures project timelines and quality standards.'
    }))
  },
  {
    role: 'Driver',
    members: [
      {
        name: 'Driver 1',
        qualification: 'Valid driving license, safety trained',
        image: '/team/driver1.jpg',
        bio: 'Responsible for safe and timely transport of equipment and personnel.'
      },
      {
        name: 'Driver 2',
        qualification: 'Valid driving license, safety trained',
        image: '/team/driver2.jpg',
        bio: 'Ensures efficient logistics support for daily site operations.'
      }
    ]
  },
  {
    role: 'Office Assistant',
    members: Array.from({ length: 2 }, (_, i) => ({
      name: `Office Assistant ${i + 1}`,
      qualification: 'SSC/HSC',
      image: `/team/assistant${i + 1}.jpg`,
      bio: 'Supports office staff with essential day-to-day tasks.'
    }))
  }
];

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredTeams = teamMembers.map(group => ({
    ...group,
    members: group.members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.members.length > 0);

  return (
    <>
      <Header />
      <br /><br />
      <main className="team-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-uppercase">Meet Our Team</h2>
            <p className="text-muted">Skilled professionals leading and supporting every project at TitasDevTech Engineering.</p>
            <input
              type="text"
              className="form-control w-50 mx-auto mt-3"
              placeholder="Search team member by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredTeams.map((group, idx) => (
            <div key={idx} className="mb-5">
              <h4 className="text-danger text-uppercase mb-4 text-center">{group.role}</h4>
              <div className="row justify-content-center">
                {group.members.map((member, i) => (
                  <div key={i} className="col-sm-10 col-md-6 col-lg-3 text-center mb-4 d-flex align-items-stretch">
                    <div
                      className="card shadow border-0 p-3 w-100 cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle mx-auto mb-3"
                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      />
                      <h5 className="text-dark mb-1">{member.name}</h5>
                      <p className="text-muted mb-1">{group.role}</p>
                      <p className="small">{member.qualification}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="modal show d-block" tabIndex="-1" onClick={() => setSelectedMember(null)}>
            <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedMember.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedMember(null)}></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="rounded-circle mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <p><strong>Role:</strong> {selectedMember.role || 'Team Member'}</p>
                  <p><strong>Qualification:</strong> {selectedMember.qualification}</p>
                  <p>{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Team;
