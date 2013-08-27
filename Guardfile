# A sample Guardfile
# More info at https://github.com/guard/guard#readme

########
# SASS #
########

# SASS DEVELOPMENT
guard 'sass', :input => 'css/sass', :output => 'css', :line_numbers => false, :style => :expanded, :load_paths => Dir.glob(File.join(Gem.dir, "gems", "compass*", "frameworks/blueprint/stylesheets")) + Dir.glob(File.join(Gem.dir, "gems", "compass*", "frameworks/compass/stylesheets"))

# SASS PRODUCTION
# guard 'sass', :input => 'resources/sass', :output => 'resources/css', :style => :compressed

###############
# LIVE RELOAD #
###############

# Any file ending with ext
guard 'livereload' do
  watch(%r{.+\.(html|css|js|php|sprites.png)$})
end

# Install guard-concat 0.0.4
# git clone git://github.com/makevoid/guard-concat
# cd guard-concat
# gem build guard-concat.gemspec
# gem install guard-concat-0.0.4.gem

# This will concatenate the javascript files specified in :files to public/js/all.js
# Must use 0.0.4 version of gem
guard :concat, type: "js", files: %w(vendor/* plugins main), input_dir: "js", output: "js/min/all"
