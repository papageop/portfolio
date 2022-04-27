import './index.css'
const timelineData = [
    {
        text: 'BS',
        date: 'September 2017- October 2021',
        category: {
            tag: 'Degree',
            color: '#FFDB14'
        }
    },
    {
        text: 'Web Analytics: Using Data to Help a Business Grow',
        date: '12 April 2019',
        category: {
            tag: 'Google Grow Greek Tourism',
            color: '#e17b77'
        }
    },
    {
        text: 'Basic Principles of Digital Marketing (Digital Marketing Certification)',
        date: 'July 2020',
        category: {
            tag: 'Google Grow Greek Tourism',
            color: '#e17b77'
        }
    },
    {
        text:
            'Data Analysis with Python: Zero to Pandas',
        date: '24 October 2020',
        category: {
            tag: 'Jovian Course',
            color: 'rgb(168 204 217)'
        },
        link: {
            url:
                'https://jovian.ai/certificate/MFQTEOJSGI',
            text: 'Link to certificate'
        }
    },
    {
        text: 'Machine Learning',
        date: '31 December 2020',
        category: {
            tag: 'Coursera Course',
            color: '#018f69'
        },
        link: {
            url: 'https://coursera.org/share/779a24993c988ced8f459542da1f88fe',
            text: 'Link to certificate'
        }
    },
    {
        text: 'Google IT Support',
        date: '31 December 2020',
        category: {
            tag: 'Coursera Course',
            color: '#018f69'
        },
        link: {
            url: 'https://coursera.org/share/4c0dc9ccb36659d4620f2da24a306880',
            text: 'Link to certificate'
        }
    },
    {
        text: 'Deep Learning with Pytorch: Zero to GANs',
        date: '22 January 2021',
        category: {
            tag: 'Jovian Course',
            color: 'rgb(168 204 217)'
        },
        link: {
            url: 'https://jovian.ai/certificate/MFQTGOJVGM',
            text: 'Link to certificate'
        }
    },
    {
        text: 'Data Structures and Algorithms in Python',
        date: '27 April 2021',
        category: {
            tag: 'Jovian Course',
            color: 'rgb(168 204 217)'
        },
        link: {
            url: 'https://jovian.ai/certificate/MFQTINZZGM',
            text: 'Link to certificate'
        }
    }
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <>
            <h1>Timeline</h1>
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </>

    );
export default Timeline