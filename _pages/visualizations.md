---
layout: page
title: visualizations
permalink: /visualizations/
description: selected visualizations. not a full list
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_projects = site.visualizations | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "date" | reverse %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid project=project %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid project=project %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
{% else %}
  <!-- Display projects without categories -->
  {% assign sorted_projects = site.visualizations | sort: "date" | reverse %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid project=project%}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid project=project%}
      {% endfor %}
    </div>
  {% endif %}
{% endif %}
</div>
