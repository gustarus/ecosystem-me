import Scene from '@components/base/scene'
import Block from '@components/base/block'
import Table from '@components/base/table'
import Education from '@components/blocks/education'
import Experience from '@components/blocks/experience'
import Links from '@components/blocks/links'
import Activities from '@components/blocks/activities'
import Skills from '@components/blocks/skills'
import LargeHeader from '@components/base/header/large'
import MediumHeader from '@components/base/header/medium'
import SmallHeader from '@components/base/header/small'

export default class extends React.Component {

  render() {
    return (
      <Scene type="details">
        <Activities title="Publications" items={this.props.publications}/>
        {this.renderTarget()}
        <Experience title="Work experience" items={this.props.experience}/>
        <Skills title="Key skills" tags={this.props.skills.tags} languages={this.props.skills.languages}/>
        <Education title="Education" items={this.props.education}/>
        <Activities title="Completed courses" items={this.props.courses}/>
        <Links title="Links" items={this.props.links}/>
      </Scene>
    );
  }

  renderTarget() {
    if (!this.props.target) {
      return null;
    }

    return (
      <Block title="My goal for the future" className="block_target" label={this.props.target.label}>
        <LargeHeader children={this.props.target.specialization}/>
        <MediumHeader children={this.props.target.company}/>
        <SmallHeader children={this.props.target.description}/>
      </Block>
    );
  }
}
