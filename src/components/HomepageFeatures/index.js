import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dễ Dàng Tiếp Cận',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hướng Nghiệp Dữ Liệu cung cấp các khóa học chuyên sâu về Giao dịch Định Lượng, Trí tuệ Nhân tạo (AI), Lập trình Flutter, Logistics, Excel, SQL và Power BI, giúp học viên dễ dàng tiếp cận và ứng dụng vào thực tế.
      </>
    ),
  },
  {
    title: 'Tập Trung vào Thực Hành',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Các khóa học tại Hướng Nghiệp Dữ Liệu được thiết kế theo hướng thực chiến, giúp học viên áp dụng kiến thức vào giao dịch tự động, xây dựng bot trading, phát triển ứng dụng di động với Flutter, tối ưu hóa quy trình Logistics, và phân tích dữ liệu chuyên sâu với Excel, SQL và Power BI.
      </>
    ),
  },
  {
    title: 'Ứng Dụng Công Nghệ Hiện Đại',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Chương trình đào tạo tích hợp AI, Machine Learning, Lập trình ứng dụng, Giao dịch thuật toán, Phân tích dữ liệu với SQL & Power BI, và quản lý chuỗi cung ứng bằng công nghệ, giúp học viên phát triển kỹ năng toàn diện.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
