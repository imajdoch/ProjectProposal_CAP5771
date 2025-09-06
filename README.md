# ProjectProposal_CAP5771

The goal of this project is to integrate structured product data with unstructured customer reviews to uncover patterns in consumer preferences, analyze the alignment between ratings and sentiments, and build models that explain or predict product success and customer satisfaction.

The three methods we can utilize

1. Exploratory Data Analysis (EDA)

Method:
Descriptive statistics and visualization techniques will be used to summarize product-level, reviewer-level, and temporal trends. Correlation analyses and category-based comparisons will be performed to identify initial patterns.

Research Questions:

How do average star ratings, review counts, and “loves” vary across product categories such as fragrance, skincare, and makeup?

Is there a relationship between product price and average rating or popularity (measured by “loves_count”)?

Do reviewer demographics (skin type, skin tone, hair color) influence average ratings or likelihood of recommendation?

Are there temporal trends in review volume and ratings, such as seasonal spikes for certain categories?

Expected Outcome:
EDA will establish the foundational understanding of which products succeed, who reviews them, and whether factors such as price, brand, or exclusivity correlate with customer satisfaction.

2. Sentiment Analysis

Method:
Natural Language Processing (NLP) techniques will be applied to the textual content of reviews. Sentiment polarity scores will be calculated and compared with numeric ratings and recommendation indicators. Outlier analysis will be used to identify mismatches between textual sentiment and star ratings.

Research Questions:

Does the sentiment of review text align with numeric star ratings, or are there mismatches?

Do recommended products contain significantly more positive review sentiment compared to non-recommended products?

What are the most common sentiment-bearing descriptors across different product categories (e.g., “hydrating” for skincare, “long-lasting” for fragrance)?

Which products or brands exhibit discrepancies between high ratings and low textual sentiment, or vice versa?

Expected Outcome:
Sentiment analysis will reveal whether written customer experiences reflect the ratings provided, while also uncovering the emotional drivers of satisfaction and dissatisfaction across different categories.

3. Association Rule Mining

Method:
Frequent pattern mining and association rules will be applied to both review text and structured product/reviewer attributes. Rules will be extracted to identify co-occurring product descriptors, demographic characteristics, and satisfaction outcomes.

Research Questions:

What combinations of product descriptors (e.g., “hydrating” + “gentle”) frequently co-occur in positive reviews?

Are there patterns linking demographic attributes (e.g., “dry skin” users) with higher or lower ratings?

Do product attributes such as high price or exclusivity consistently associate with high “loves_count” or recommendation rates?

What negative associations emerge (e.g., “oily skin” + “irritating” → low ratings)?

Expected Outcome:
Association rules will highlight hidden patterns between product characteristics, user demographics, and satisfaction measures. This method provides interpretable insights into the combinations of factors that drive positive or negative consumer experiences.
