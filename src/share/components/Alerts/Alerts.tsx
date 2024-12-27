import { Color, Texto } from '../../style/main_style'
import { StyleAlerts } from './style'

type Alert = {
  title: string
  desc: string
}

const Alerts = ({ title, desc }: Alert) => {
  return (
    <>
      <StyleAlerts>
        <Texto color={Color.blue} size={20} weight={700}>
          {title}
        </Texto>
        <Texto color={Color.white} size={15} weight={500}>
          {desc}
        </Texto>
        <div className="span"></div>
      </StyleAlerts>
    </>
  )
}

export default Alerts
