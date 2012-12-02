class ApplicationsPresenter
  def self.from_array(applications)
    applications.collect do |application|
      new(application)
    end
  end

  def initialize(application)
    @application = application
  end

  def as_json(*)
    @application.attributes
  end
end
