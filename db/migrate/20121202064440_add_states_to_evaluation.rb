class AddStatesToEvaluation < ActiveRecord::Migration
  def change
  	add_column :evaluations, :completed, :boolean, default: false
  	add_column :evaluations, :read, :boolean, default: false
  end
end
