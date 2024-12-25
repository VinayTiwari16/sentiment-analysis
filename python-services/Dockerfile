FROM python:3.10-slim
WORKDIR /app
# Step 3: Copy the 'sa' folder into the container
COPY sa/ ./sa/

# Step 4: Install virtualenv
RUN pip install --no-cache-dir --upgrade pip virtualenv

# Step 5: Create a virtual environment
RUN python -m venv /app/venv

# Step 6: Activate the virtual environment and install dependencies
RUN /app/venv/bin/pip install --no-cache-dir -r /app/sa/requirements.txt

# Step 7: Set the PATH to use the virtual environment by default
ENV PATH="/app/venv/bin:$PATH"

# Step 8: Specify the entry point for the application
CMD ["python", "/app/sa/sentiment_analysis.py"]


