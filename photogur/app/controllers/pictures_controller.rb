class PicturesController < ApplicationController

	def index
		@pictures = [
			{
				:title => "Erdogan Can't Deal",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/fb15ed8eb293ea2ec8f5aa56f60414dd/tumblr_mp9i9bKyDF1rlnfh7o1_1280.jpg"
			},
			{
				:title => "Hunting Edward Snowden",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/99a59994346bab266c661ab2b895d81d/tumblr_mp0ga0Ghls1rlnfh7o1_1280.jpg"
			},
			{
				:title => "American Stance on Syria",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/bb00037b12535e908f66bc0982db6a9f/tumblr_mm57q9E5kA1rlnfh7o1_1280.jpg"
			}
		]
	end

	def show
		@pictures = [
			{
				:title => "Erdogan Can't Deal",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/fb15ed8eb293ea2ec8f5aa56f60414dd/tumblr_mp9i9bKyDF1rlnfh7o1_1280.jpg"
			},
			{
				:title => "Hunting Edward Snowden",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/99a59994346bab266c661ab2b895d81d/tumblr_mp0ga0Ghls1rlnfh7o1_1280.jpg"
			},
			{
				:title => "American Stance on Syria",
				:artist => "IR Cats",
				:url => "http://25.media.tumblr.com/bb00037b12535e908f66bc0982db6a9f/tumblr_mm57q9E5kA1rlnfh7o1_1280.jpg"
			}
		]
		@picture = @pictures[params[:id].to_i]
	end

	def new
		
	end

	def create
		render :text => "Saving a picture. URL: #{params[:url]}, Title: #{params[:title]}, Artist: #{params[:artist]}"
	end	


	private

	def picture_params
		return params.require(:picture).permit(:artist, :title, :url)
	end
end



