import styles from './CohortDetails.module.css'

const cohorts = [
  {
    title: 'INFANTOM22 - Java FSD',
    mentor: 'Samuel Ortiz',
    startDate: '12 Feb 2024',
    status: 'ongoing',
    location: 'Hyderabad',
    headCount: 180,
  },
  {
    title: 'ADuke1918 - Java FSD',
    mentor: 'Priya Singh',
    startDate: '07 Dec 2023',
    status: 'completed',
    location: 'Bangalore',
    headCount: 160,
  },
  {
    title: 'CDEV2105 - Java FSD',
    mentor: 'Rakesh Patel',
    startDate: '02 Jan 2024',
    status: 'ongoing',
    location: 'Pune',
    headCount: 145,
  },
]

const statusColors = {
  ongoing: '#008000',
  completed: '#0000ff',
  planned: '#ffa500',
}

function CohortDetails() {
  return (
    <div className={styles.container}>
      {cohorts.map((cohort) => (
        <div key={cohort.title} className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>{cohort.title}</h2>
            <span
              className={styles.status}
              style={{ backgroundColor: statusColors[cohort.status] }}
            >
              {cohort.status}
            </span>
          </div>
          <div className={styles.cardBody}>
            <p>
              <strong>Mentor:</strong> {cohort.mentor}
            </p>
            <p>
              <strong>Start date:</strong> {cohort.startDate}
            </p>
            <p>
              <strong>Location:</strong> {cohort.location}
            </p>
            <p>
              <strong>Head count:</strong> {cohort.headCount}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CohortDetails
