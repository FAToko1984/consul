class AddPollsCountToTags < ActiveRecord::Migration[5.2]
    def change
      add_column :tags, :polls_count, :integer, default: 0
    end
  end