import styles from '../../styles/CourseNavigation.module.css'

export default function Navigation() {
  return (
  	<nav className={styles.quickNav}>
  		<a href="/revelation">Lessons</a>
		<a href="/revelation/outline">Outline</a>
		<a href="/revelation/textbook">Textbook</a>
  	</nav>
)

}