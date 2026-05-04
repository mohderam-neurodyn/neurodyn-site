# Windsurf Optimization Guide - Node.js Development

## High CPU Extensions to Disable/Remove

### Heavy Extensions (Disable Immediately):
- **GitLens** (`eamodio.gitlens`) - High CPU git operations
- **Live Server** (`ritwickdey.liveserver`) - Background file watching
- **Import Cost** (`wix.vscode-import-cost`) - Continuous analysis
- **Bracket Pair Colorizer** - Visual overhead
- **Todo Tree** - File system scanning
- **Path Intellisense** - Continuous indexing
- **NPM Intellisense** - Package.json watching
- **Test Explorers** - Background test discovery
- **Docker Extensions** - Container monitoring
- **Remote Development** - SSH/WSL overhead

### Keep Only Essential:
- **Prettier** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`) 
- **Git** (`ms-vscode.vscode-git`)

## Node.js Development Workflow Optimizations

### 1. Reduce Dev Server Load
```bash
# Use polling instead of aggressive file watching
npm run dev -- --watch-poll

# Limit HMR hot module replacement frequency
npm run dev -- --hmr-interval 2000

# Disable source maps in development for faster builds
npm run dev -- --no-source-maps
```

### 2. Package.json Scripts Optimization
```json
{
  "scripts": {
    "dev": "next dev --watch-poll=1000 --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --max-warnings 0",
    "type-check": "tsc --noEmit --project tsconfig.json"
  }
}
```

### 3. File Watching Best Practices
- Use `--watch-poll` instead of native file watching
- Exclude large directories from watchers
- Limit concurrent file operations
- Use `.gitignore` and `.eslintignore` effectively

### 4. Memory Management
```bash
# Limit Node.js memory usage
export NODE_OPTIONS="--max-old-space-size=2048"

# For development servers
node --max-old-space-size=1024 node_modules/.bin/next dev
```

### 5. Background Process Management
```bash
# Check running Node.js processes
ps aux | grep node

# Kill unnecessary background processes
pkill -f "next dev"
pkill -f "webpack"
```

## Performance Monitoring Commands

### CPU Usage Monitoring
```bash
# Monitor Windsurf CPU usage
top -pid $(pgrep -f "Windsurf")

# System-wide CPU monitoring
htop

# Temperature monitoring (macOS)
sudo powermetrics --samplers cpu_power -i 1000
```

### Memory Usage
```bash
# Memory usage by process
ps aux | head -1; ps aux | grep -E "(Windsurf|node)" | sort -k4nr

# System memory pressure
memory_pressure
```

## Thermal Management Tips

1. **Keep laptop elevated** for better airflow
2. **Close unnecessary browser tabs** during development
3. **Use Activity Monitor** to identify CPU hogs
4. **Restart Windsurf daily** to prevent memory leaks
5. **Avoid multiple dev servers** running simultaneously

## Emergency CPU Reduction

If CPU usage spikes:
```bash
# Kill all Node.js processes (use with caution)
pkill -f node

# Restart Windsurf cleanly
killall Windsurf && open -a Windsurf
```

## Verification Checklist

After applying optimizations:
- [ ] Windsurf startup time < 5 seconds
- [ ] Idle CPU usage < 5%
- [ ] No memory leaks over time
- [ ] Dev server responsive
- [ ] Hot reload working
- [ ] Git operations fast
