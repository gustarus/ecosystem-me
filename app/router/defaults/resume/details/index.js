import Scene from '@core/views/scene';
import Block from '@core/views/block';
import Table from '@core/views/table';
import Education from '@core/views/blocks/education';
import Experience from '@core/views/blocks/experience';
import Links from '@core/views/blocks/links';
import Activities from '@core/views/blocks/activities';
import Skills from '@core/views/blocks/skills';
import LargeHeader from '@core/views/header/large';
import MediumHeader from '@core/views/header/medium';
import SmallHeader from '@core/views/header/small';

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
