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
  
  def update
    @post = Post.find(params[:id])
    @post.update_attributes!(params[:post])
    render :json => @post
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :json => @post
  end
end
