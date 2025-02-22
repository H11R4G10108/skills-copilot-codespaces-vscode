function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'MongoDB'],
    skillsCount: function() {
      return this.skills.length;
    }
  }
}