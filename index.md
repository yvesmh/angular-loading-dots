---
title: Hello, World!
layout: default
---


## Default config

Use the loading-dots attribute on a <code>span</code>tag:

{% highlight html %}
{% include example-default.html %}
{% endhighlight %}


{% include example-default.html %}

By default, it will display loading dots starting from 0 to 5 dots, incrementing every 300 milliseconds

***

## Using it with AngularJS
loading-dots listens to changes to the is-loading attribute, so by setting it to a scope variable you can control when it starts and when it stops from your controller

{% highlight html %}
{% include example-angular.html %}
{% include angular-set-loading.html %}
{% endhighlight %}

**The controller's JS**
{% highlight js %}
module.controller('AppCtrl', function($scope, $timeout) {
  $scope.isLoading = false;
  $scope.loadTime = 3500;

  $scope.startLoading = function() {
    $scope.isLoading = true;
  };

  $scope.stopLoading = function() {
    $scope.isLoading = false;
  };

  $scope.simulateAsync = function() {
    $scope.isLoading = true;

    $timeout(function() {
      $scope.isLoading = false;
    }, $scope.loadTime);

  };

});
{% endhighlight %}

{% include example-angular.html %}
{% include angular-set-loading.html %}

***

## Configuring min-dots and max-dots

You can configure the minimum amount of dots and the maximum amount of dots to display.


{% highlight html %}
{% include example-minmax.html %}
{% endhighlight %}

{%include example-minmax.html%}


If not set, **min defaults to 0** and **max defaults to 5**

***

## Configuring starting point

You can also configure the starting number of dots to display.

{% highlight html %}
{% include example-starting.html %}
{% endhighlight %}

{%include example-starting.html%}

If not set, **starting defaults to min-dots (0 if min-dots is not configured)**

**Note that after the dots reach max-dots, it will start over from min-dots, not starting**

***

## Configuring increments
Increase the number of dots added each interval

{% highlight html %}
{% include example-increment.html %}
{% endhighlight %}

{%include example-increment.html%}

If not set, **increment defaults to 1** dot per interval

***

## Configuring interval

The interval is configurable too

{% highlight html %}
{% include example-interval.html %}
{% endhighlight %}

{%include example-interval.html%}

The interval is in **milliseconds**

If not set, **interval** defaults to 300 milliseconds

***

## Configuring character

If you wish to use a different character other than the dot, you can.

{% highlight html %}
{% include example-character.html %}
{% endhighlight %}

{%include example-character.html%}

***

## Defaults summary

| **Attribute** | **Default** |
| --------- | ------- |
| min-dots  |    0    |
| max-dots  |    5    |
| starting  | min-dots|
| increment |    1    |
| interval  |   300   |
| character |   '.'   |
