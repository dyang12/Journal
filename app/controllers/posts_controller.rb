class PostsController < ApplicationController
  def index
    @posts = Post.all
    render :json => @posts
  end
  
  def create
    @post = Post.new(params[:post])
    
    @post.save!
    render :json => @post
  end
end
